import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Slider } from 'react-native-elements';

const Index = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [selectedLetterIndex, setSelectedLetterIndex] = useState<number>(0);
  const [selectedLocation, setSelectedLocation] = useState<string>('Boston');
  const [selectedYear, setSelectedYear] = useState<number>(2017);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel</Text>

      {/* Slider for Selecting Letters */}
      <Slider
        value={selectedLetterIndex}
        onValueChange={(value) => setSelectedLetterIndex(Math.round(value))}
        step={1}
        minimumValue={0}
        maximumValue={25}
        style={styles.letterSlider}
      />
      <Text style={styles.letterDisplay}>
        Selected Letter: {letters[selectedLetterIndex]}
      </Text>

      <View style={styles.gridContainer}>
        {['Travel', 'Plane', 'Hotels', 'Resorts', 'Events', 'Car', 'Home', 'Beauty', 'Sport'].map((category) => (
          <TouchableOpacity key={category} style={styles.box}>
            <Text style={styles.boxText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.verticalSlidersContainer}>
        {/* Left Slider for Cities */}
        <Slider
          value={0}
          onValueChange={(value) =>
            setSelectedLocation(['Boston', 'NYC', 'DC', 'Miami', 'Singapore', 'Paris', 'Rome'][Math.round(value)])
          }
          step={1}
          minimumValue={0}
          maximumValue={6}
          orientation="vertical"
          style={styles.verticalSlider}
        />

        {/* Right Slider for Years */}
        <Slider
          value={2017}
          onValueChange={(value) => setSelectedYear(Math.round(value))}
          step={1}
          minimumValue={2017}
          maximumValue={2025}
          orientation="vertical"
          style={styles.verticalSlider}
        />
      </View>

      <Text style={styles.selectedInfo}>
        Selected: {letters[selectedLetterIndex]} in {selectedLocation} ({selectedYear})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  letterSlider: {
    width: '90%',
    marginVertical: 20,
  },
  letterDisplay: {
    fontSize: 18,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    width: '30%',
    height: 100,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  boxText: {
    fontSize: 16,
  },
  verticalSlidersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  verticalSlider: {
    width: 50,
    height: 200,
    transform: [{ rotate: '-90deg' }],
  },
  selectedInfo: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default Index;
