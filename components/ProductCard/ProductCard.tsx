import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

interface Props {
  data: Product;
  index: number;
}

function ProductCard(props: Props): JSX.Element {
  function shortenString(inputString: string) {
    if (inputString.length <= 15) {
      return inputString; // Return the string as it is if it has 15 or fewer characters
    } else {
      const shortenedString = inputString.slice(0, 15) + '...'; // Cut the first 15 characters and append "..."
      return shortenedString;
    }
  }

  return (
    <Card style={styles.card} key={`${props.index}-${props.data.title}`}>
      <Card.Cover
        source={{uri: props.data.images[0]}}
        style={styles.coverImage}
      />
      <Text style={styles.title}>{shortenString(props.data.title)}</Text>
      <Text style={styles.price}>{props.data.price}$</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {flex: 1, margin: 5},
  coverImage: {width: '100%', height: 170, resizeMode: 'cover'},
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fffd',
    fontWeight: 'bold',
  },
  price: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: '#fffd',
    fontWeight: 'bold',
  },
});

export default ProductCard;
