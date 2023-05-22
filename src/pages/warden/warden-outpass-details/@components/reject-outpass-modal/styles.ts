import { StyleSheet } from 'react-native'

import { TOKEN } from '@app/constants/styles'

export const styles = StyleSheet.create({
	heading: {
		marginBottom: 12,
	},
	textInput: {
		paddingHorizontal: 12,
		borderRadius: 10,
		borderColor: TOKEN.COLOR.BORDER_COLOR,
		borderWidth: 1,
		fontSize: 16,
		height: 120,
	},
	buttonsContainer: {
		marginTop: 24,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
})
