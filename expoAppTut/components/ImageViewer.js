import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ PlaceholderImageSource, selectedImage }) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : PlaceholderImageSource;

    return <Image source={imageSource} style={styles.image}/>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
