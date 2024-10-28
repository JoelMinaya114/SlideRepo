import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';

const Index = () => {
  // Letters corresponding to the boxes below
  const letters = 'TPHRECHBS'.split('');
  const [selectedLetterIndex, setSelectedLetterIndex] = useState<number>(0);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number>(2017);

  const cities = ['Boston', 'NYC', 'DC', 'Miami', 'Singapore', 'Paris', 'Rome'];
  const years = Array.from({ length: 9 }, (_, i) => 2017 + i); // Years from 2017 to 2025

  const handleLetterChange = (value: number) => {
    setSelectedLetterIndex(Math.round(value));
  };

  const handleLocationChange = (value: number) => {
    setSelectedLocationIndex(Math.round(value));
  };

  const handleYearChange = (value: number) => {
    setSelectedYear(Math.round(value));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Travel</Text>

      {/* Horizontal Slider for Selecting Letters */}
      <Slider
        value={selectedLetterIndex}
        onValueChange={(value) => {
          const newValue = Math.round(value);
          setSelectedLetterIndex(newValue);
        }}
        step={1}
        minimumValue={0}
        maximumValue={letters.length - 1}
        thumbTintColor="red"
        style={styles.letterSlider}
        thumbStyle={styles.sliderThumb}
        trackStyle={styles.sliderTrack}
      />
      <Text style={styles.letterDisplay}>{letters[selectedLetterIndex]}</Text>

      {/* Parent Container for Side Sliders and Grid */}
      <View style={styles.mainContentContainer}>
        {/* Cities Slider - Left Side */}
        <View style={styles.leftSliderContainer}>
          <View style={styles.cityLabels}>
            {cities.map((city, index) => (
              <Text key={city} style={styles.cityText}>
                {city}
              </Text>
            ))}
          </View>
          <Slider
            value={selectedLocationIndex}
            onValueChange={handleLocationChange}
            step={1}
            minimumValue={0}
            maximumValue={cities.length - 1}
            orientation="vertical"
            style={styles.verticalSlider}
            thumbTintColor="red"
            thumbStyle={styles.sliderThumb}
            trackStyle={styles.sliderTrack}
          />
        </View>

        {/* Grid for Travel Category Boxes */}
        <View style={styles.gridContainer}>
          {['Travel', 'Plane', 'Hotels', 'Resorts', 'Events', 'Car', 'Home', 'Beauty', 'Sport'].map((category) => (
            <TouchableOpacity key={category} style={styles.box}>
              <Text style={styles.boxText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Years Slider - Right Side */}
        <View style={styles.rightSliderContainer}>
          <Slider
            value={selectedYear}
            onValueChange={handleYearChange}
            step={1}
            minimumValue={2017}
            maximumValue={2023}
            orientation="vertical"
            style={styles.verticalSlider}
            thumbTintColor="red"
            thumbStyle={styles.sliderThumb}
            trackStyle={styles.sliderTrack}
          />
          <View style={styles.yearLabels}>
            {years.map((year) => (
              <Text key={year} style={styles.yearText}>
                {year}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <Text style={styles.selectedInfo}>
        Selected: {letters[selectedLetterIndex]} in {cities[selectedLocationIndex]} ({selectedYear})
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
    width: '80%',
    marginVertical: 20,
  },
  letterDisplay: {
    fontSize: 18,
    marginBottom: 10,
  },
  mainContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
  },
  leftSliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  rightSliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '70%',
  },
  box: {
    width: '32%',
    height: 100,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  boxText: {
    fontSize: 16,
  },
  cityLabels: {
    marginRight: -13,
  },
  cityText: {
    fontSize: 14,
    marginBottom: 12,
  },
  verticalSlider: {
    width: 30,
    height: 150,
  },
  yearLabels: {
    marginLeft: 5,
  },
  yearText: {
    fontSize: 14,
    marginBottom: 13,
  },
  selectedInfo: {
    fontSize: 16,
    marginTop: 20,
  },
  sliderThumb: {
    cursor: 'pointer',
    width: 25,  // Adjust the size of the thumb here
    height: 25, // Adjust the size of the thumb here
    borderRadius: 10, // Make sure it's circular
  },
  sliderTrack: {
    height: 10,
    borderRadius: 5,
  },
});

export default Index;
