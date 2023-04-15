import { TOKEN } from '@app/constants/styles'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	QRWrapper: {
		backgroundColor: TOKEN.COLOR.SECONDARY,
		borderWidth: 2,
		borderColor: TOKEN.COLOR.PRIMARY,
		borderStyle: 'dashed',
		borderRadius: 20,
		height: 270,
		width: 270,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
