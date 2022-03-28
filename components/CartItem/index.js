import React,{useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './styles';
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MenuItem from '../MenuItem'
function CartItem (props) {
    const[locked,setLocked] =useState(false)
    const handleLocked = () =>{
        setLocked(prev=>!prev)
    }
  return (
    <View style={styles.carContainer}>

      <ImageBackground
        style={styles.bgImage}
        source={require ('../../assets/background.png')}
      />
{/* *************************************** */}

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} size={24} icon={faToolbox} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CartItem</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} size={24} icon={faCog} />
        </TouchableOpacity>
      </View>

{/* *************************************** */}


      {/* batterySection */}
      <View style={styles.batterySection}>
        <Text style={styles.batteryText}>150 ml</Text>
        <Image
          style={styles.batteryImage}
          source={require ('../../assets/battery.png')}
        />
      </View>
      
      
{/* *************************************** */}
      
      {/* status */}
      <View style={styles.status}>
        <Text style={styles.parkText}>Parked</Text>
      </View>

{/* *************************************** */}

      {/* Buttons */}
      <ScrollView>
      <View style={styles.controllers}>
        <TouchableOpacity>
          <View style={styles.controllersButton}>

            <FontAwesomeIcon style={styles.icon} size={24} icon={faFan} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controllersButton}>

            <FontAwesomeIcon style={styles.icon} size={24} icon={faKey} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.controllersButton} >
            <FontAwesomeIcon style={styles.icon} onPress={handleLocked} size={24} icon={locked?faLock:faUnlockAlt} />
          </View>
        </TouchableOpacity>
      </View>

      {/* menu Item */}
      <MenuItem/>
      </ScrollView>

    </View>
  );
}

export default CartItem;
