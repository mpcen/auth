import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		backgroundColor: '#f2f2f2',
		height: 60,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
	},
	textStyle: {
		fontSize: 25	
	}
};

export { Header };
