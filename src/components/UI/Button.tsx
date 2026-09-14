import { Platform, Pressable, StyleSheet, Text } from 'react-native';

import { Colors } from '@/constants/colors';

type ButtonProps = {
	onPress: () => void;
	children: React.ReactNode;
};

const Button = ({ onPress, children }: ButtonProps) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [styles.button, pressed && styles.pressed]}
		>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 8,
		margin: 4,
		backgroundColor: Colors.primary800,
		borderRadius: 4,
		...Platform.select({
			android: {
				elevation: 2,
			},
			ios: {
				shadowColor: 'black',
				shadowOpacity: 0.15,
				shadowOffset: { width: 1, height: 1 },
				shadowRadius: 2,
			},
			default: {},
		}),
	},
	pressed: {
		opacity: 0.7,
	},
	text: {
		textAlign: 'center',
		fontSize: 16,
		color: Colors.primary50,
	},
});
