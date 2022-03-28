import React from 'react';
import {View , Text , TouchableOpacity , ScrollView } from 'react-native'
import styles from './styles'
import {
    faCog,
    faToolbox,
    faFan,
    faKey,
    faLock,
    faUnlockAlt,
    faChevronRight
  } from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
  import items from './items'
function MenuItem(props){
return (
<View style={styles.menuItems}>
            {items.map(item => (
                <TouchableOpacity key={item.id}>
                    <View style={styles.menuRow}>
                        <FontAwesomeIcon style={styles.icon} icon={item.icon} size={24}/>
                        <View style={styles.menuTextBox}>
                            <Text style={styles.menuText}>{item.title}</Text>
                            {item.subTitle && (
                                <Text style={styles.subTitle}>{item.subTitle}</Text>
                            )}
                        </View>
                        <FontAwesomeIcon style={styles.arrowIcon} icon={ faChevronRight } size={24}/>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
);
}




export default MenuItem;