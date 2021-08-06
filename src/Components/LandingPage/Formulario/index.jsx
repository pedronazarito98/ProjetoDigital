import { useState } from 'react'
import { Form } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css';

export function Formulario() {
    const [value, setValue] = useState();
    const options = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
        { key: 'o', text: 'Other', value: 'other' },
      ]

      const handleChange = (e) =>{
            setValue(e.value);
      }

    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
                <Form.Select
                    fluid
                    label='Gender'
                    options={options}
                    placeholder='Gender'
                />
            </Form.Group>
            <Form.Group inline>
                <label>Size</label>
                <Form.Radio
                    label='Small'
                    value='sm'
                    checked={value === 'sm'}
                    onChange={handleChange}
                />
                <Form.Radio
                    label='Medium'
                    value='md'
                    checked={value === 'md'}
                    onChange={handleChange}
                />
                <Form.Radio
                    label='Large'
                    value='lg'
                    checked={value === 'lg'}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.TextArea label='About' placeholder='Tell us more about you...' />
            <Form.Checkbox label='I agree to the Terms and Conditions' />
            <Form.Button>Submit</Form.Button>
        </Form>
    )
}