import { H3, YStack, Fieldset, Input, Label, TextArea } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'
import { SelectDemo } from './reason-select'

export const OutpassDetails = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Enter outpass details</H3>
				<Fieldset>
					<Label>Out date</Label>
					<Input
						id='outdate'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Expected return date</Label>
					<Input
						id='returndate'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Out time</Label>
					<Input
						id='outtime'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Location</Label>
					<Input
						id='location'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<SelectDemo />
				</Fieldset>
				<Fieldset>
					<Label>Other</Label>
					<TextArea
						minHeight={175}
						numberOfLines={4}
					/>
				</Fieldset>
				<Fieldset
					marginTop='$4'
					marginBottom='$4'
				>
					<Button variant='primary'>Continue</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}