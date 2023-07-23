import {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {api} from '../../libs/api';
import DropDownPicker from 'react-native-dropdown-picker';
import ProductCard from '../../components/ProductCard';

function Products(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  // const [searchedProducts, setSearchedProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<
    Array<{label: string; value: string}>
  >([{label: 'Select all Products', value: ''}]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const results = await api.products.getProducts();
      setProducts(results.products);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const getCategories = async () => {
    try {
      const results = await api.products.getCategories();
      results.forEach((category, index) =>
        setCategories(categories => [
          ...categories,
          {label: category, value: category, key: `${category}-${value}-${index}`},
        ])
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCategory = (category: string | null) => {
    if (!category) {
      setFilteredProducts([...products]);
      return;
    }
    const filtered = products?.filter(
      product => product?.category === category,
    );
    setFilteredProducts(filtered);
  };

  const onSearch = (filteredProducts: Product[]) => {
    return filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
      <SafeAreaView  style={styles.container}>
        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.header}>
          <TextInput
            placeholder="Search"
            style={styles.input}
            onChangeText={text => setSearchText(text)}
          />
          <DropDownPicker
            style={styles.dropDown}
            dropDownContainerStyle={{width: '49%'}}
            open={open}
            value={value}
            items={categories}
            setOpen={setOpen}
            onChangeValue={onChangeCategory}
            setValue={setValue}
            setItems={setCategories}
          />
        </View>
        <View style={styles.productsList}>
          <FlatList
            scrollEnabled={true}
            data={onSearch(filteredProducts)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ProductCard data={item} index={index} />
            )}
            horizontal={false}
            numColumns={2}
            ListFooterComponent={() => {
              return loading
                ? ( <ActivityIndicator size="large" color="#007AFF" />)
                : !onSearch(filteredProducts).length && (<Text style={styles.message}>No Products found</Text>)
            }}
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'rgb(30, 52, 69)', height : "100%", paddingLeft :5, paddingRight: 5},
  input : {
    width: '49%',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  dropDown : {
    width: '49%',
    marginLeft : 7
  },
  productsList : { flex: 1, width: '100%', padding: 5 },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    marginTop : 30,
    display: 'flex',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
  },
  message : { textAlign: 'center', fontSize: 20, color: '#FFF' }
});

export default Products;