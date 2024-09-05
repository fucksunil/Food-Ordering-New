import { View} from 'react-native';
import products from '@/assets/data/products';
import ProductListItems from '@/src/components/ProductListItem';


export default function MenuScreen() {
  return (
    <View>
      <ProductListItems product={products[1]} />
      <ProductListItems product={products[2]} />
    </View>
  );
}

