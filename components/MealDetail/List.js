import { StyleSheet, Text } from 'react-native';

export default function List({ data }) {
  return data.map((dataPoint) => (
    <Text key={dataPoint} style={styles.listItem}>
      {dataPoint}
    </Text>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 12,
    elevation: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 6,
    marginHorizontal: 30,
    backgroundColor: '#ad5924',
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});
