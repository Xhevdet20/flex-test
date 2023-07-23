import {useEffect, useMemo, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {api} from '../../libs/api';
import DropDownPicker from 'react-native-dropdown-picker';
import ProductCard from '../../components/ProductCard';
import styles from './Products.styles';
import {Button} from 'react-native-paper';

function Products(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<
    Array<{label: string; value: string}>
  >([{label: 'Select all Products', value: ''}]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<string>('');
  const [brands, setBrands] = useState<string[]>([]);
  const [selectBrand, setSelectBrand] = useState<string>('');

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
          {
            label: category,
            value: category,
            key: `${category}-${value}-${index}`,
          },
        ]),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeCategory = (category: string | null) => {
    setSelectBrand('');
    if (!category) {
      setFilteredProducts([...products]);
      setCategory('');
      return;
    }
    setCategory(category);
    const filtered = products?.filter(
      product => product?.category === category,
    );
    setFilteredProducts(filtered);
  };

  const filterByBrand = (brand: string) => {
    // console.log(JSON.stringify(products))
    if (brand === selectBrand) {
      const filteredByBrand = products?.filter(
        product => product?.category === category,
      );
      setFilteredProducts(filteredByBrand);
      setSelectBrand('');
    } else {
      const filteredByBrand = products?.filter(
        product => product?.category === category && product?.brand === brand,
      );
      setFilteredProducts(filteredByBrand);
      setSelectBrand(brand);
    }
  };

  const getBrands = () => {
    if (category != '') {
      let brands: string[] = [];
      console.log(filteredProducts.length);
      filteredProducts.forEach(product => {
        if (brands.indexOf(product.brand) == -1) {
          brands.push(product.brand);
        }
      });
      setBrands(brands);
    }
    return;
  };

  const onSearch = useMemo(() => {
    return (filteredProducts: Product[]) => {
      return filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchText.toLowerCase()),
      );
    };
  }, [searchText]);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    getBrands();
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
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
      {category && brands.length != 0 && (
        <View>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scroll}
            contentInsetAdjustmentBehavior="never"
            showsHorizontalScrollIndicator={false}>
            {brands.map((brand, index) => (
              <Button
                key={`${brand}-${index}`}
                style={{
                  width: 88,
                  borderRadius: 5,
                  height: 40,
                  margin: 5,
                  padding: 0,
                }}
                theme={{
                  colors: {
                    primary:
                      selectBrand == brand
                        ? 'rgba(29, 161, 147, 1)'
                        : 'rgba(255, 255, 255, 0.5)',
                    onPrimary: '#FFF',
                  },
                }}
                mode="contained"
                contentStyle={{
                  // <--- HERE-----
                  paddingVertical: 0,
                }}
                labelStyle={{
                  color: 'white',
                  fontSize: 8,
                  margin: 0,
                  padding: 0,
                }}
                onPress={() => filterByBrand(brand)}>
                #{brand}
              </Button>
            ))}
          </ScrollView>
        </View>
      )}
      <View style={styles.productsList}>
        <FlatList
          scrollEnabled={true}
          data={onSearch(filteredProducts)}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <ProductCard data={item} index={index} />
          )}
          horizontal={false}
          numColumns={2}
          ListFooterComponent={() => {
            return loading ? (
              <ActivityIndicator size="large" color="#007AFF" />
            ) : (
              !onSearch(filteredProducts).length && (
                <Text style={styles.message}>No Products found</Text>
              )
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Products;
