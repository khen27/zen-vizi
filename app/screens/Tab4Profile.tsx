import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface ProfileProps {
  name: string;
  city: string;
  bio: string;
  imageSrc: ImageSourcePropType;
  onBack: () => void;
  onInstagram: () => void;
}

const Tab4Profile: React.FC<ProfileProps> = ({
  name,
  city,
  bio,
  imageSrc,
  onBack,
  onInstagram,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Row */}
      <View style={styles.header}>
        <Pressable style={styles.headerButton} onPress={onBack}>
          <Image
            source={require('@/assets/back-button.png')}
            style={styles.buttonIcon}
          />
        </Pressable>
        <Pressable style={styles.headerButton} onPress={onInstagram}>
          <Image
            source={require('@/assets/instagram-button.png')}
            style={styles.buttonIcon}
          />
        </Pressable>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Profile Image */}
        <Image source={imageSrc} style={styles.profileImage} />

        {/* Name */}
        <Text style={styles.nameText}>{name}</Text>

        {/* City */}
        <Text style={styles.cityText}>{city}</Text>

        {/* Bio */}
        <Text style={styles.bioText}>{bio}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  nameText: {
    fontFamily: 'System',
    fontWeight: '800',
    fontSize: 60,
    color: '#101514',
    textAlign: 'center',
    marginBottom: 10,
  },
  cityText: {
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 18,
    color: '#4694FD',
    textAlign: 'center',
    marginBottom: 20,
  },
  bioText: {
    fontFamily: 'System',
    fontWeight: '300',
    fontSize: 20,
    lineHeight: 30,
    color: '#000000',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Tab4Profile; 