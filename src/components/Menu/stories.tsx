import Menu, { MenuProps } from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Basic: Story<MenuProps> = (args) => <Menu {...args} />

Basic.args = {}

Basic.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },
  layout: 'fullscreen'
}
