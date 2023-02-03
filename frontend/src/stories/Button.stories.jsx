import Button from '../components/button/Button'
import PropTypes from 'prop-types'
export default {
    title: 'Button',
    component: Button
}

export const Default = (args) => <Button {...args}>I'm a button</Button>
Default.args = {
   color: 'blue',
   size: 'md',
   label: 'Im a button'
}