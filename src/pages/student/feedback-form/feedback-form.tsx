import { YStack, Fieldset, Input, Label, TextArea } from 'tamagui'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Text } from 'react-native'
import { globalStyles } from '@app/constants/styles'
import { Button } from '@app/components/ui/button'

type FormValues = {
	type: string
	message: string
}

export const FeedbackForm = ({ navigation }) => {
	const initialValues: FormValues = {
		type: '',
		message: '',
	}
	const validationSchema = Yup.object({
		type: Yup.string()
			.required('Type of message is required')
			.min(4, 'Type of message has to be at least 4 characters long')
			.matches(
				/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
				'Type of message should only contain letters, numbers, and spaces',
			),

		message: Yup.string()
			.required('Course is required')
			.min(4, 'Type of message has to be at least 4 characters long')
			.matches(
				/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
				'Message should only contain letters, numbers, and spaces',
			),
	})

	const onSubmit = (values: FormValues) => {
		console.log(values)
	}
	return (
		<PageWrapper>
			<YStack maxWidth={600}>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
						<YStack space='$4'>
							<Fieldset>
								<Label>Type of message</Label>
								<Input
									id='type'
									fontSize={16}
									height={50}
									onChangeText={handleChange('type')}
									onBlur={handleBlur('type')}
									value={values.type}
								/>
								{errors.type && touched.type ? (
									<Text style={globalStyles.errorText}>{errors.type}</Text>
								) : null}
							</Fieldset>
							<Fieldset>
								<Label>Message</Label>
								<TextArea
									id='message'
									minHeight={240}
									numberOfLines={4}
									onChangeText={handleChange('message')}
									onBlur={handleBlur('message')}
									value={values.message}
								/>
								{errors.message && touched.message ? (
									<Text style={globalStyles.errorText}>{errors.message}</Text>
								) : null}
							</Fieldset>
							<Button
								style={{ marginTop: 24 }}
								variant='secondary'
								onPress={() => {
									handleSubmit()
								}}
							>
								Submit
							</Button>
						</YStack>
					)}
				</Formik>
			</YStack>
		</PageWrapper>
	)
}
