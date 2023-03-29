import { H3, YStack, Fieldset, Input, Label } from 'tamagui'
import { Button } from '@app/components/ui/button'
import { PageWrapper } from '@app/components/ui/page-wrapper'

export const HostelDetails = ({ navigation }) => {
	return (
		<PageWrapper>
			<YStack
				space='$4'
				maxWidth={600}
			>
				<H3>Hostel details</H3>
				<Fieldset>
					<Label>Tower name</Label>
					<Input
						id='towername'
						size='$5'
					/>
				</Fieldset>
				<Fieldset>
					<Label>Room number</Label>
					<Input
						id='roomnumber'
						size='$5'
						keyboardType='numeric'
					/>
				</Fieldset>
				<Fieldset marginTop='$4'>
					<Button variant='primary'>Continue</Button>
				</Fieldset>
			</YStack>
		</PageWrapper>
	)
}