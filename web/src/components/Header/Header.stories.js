import Header from '../Header'

//๐ This default export determines where your story goes in the story list
export default {
  /* ๐ The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Header',
  component: Header,
};

//๐ We create a โtemplateโ of how args map to rendering
const Template = args => <Header {...args} />

export const Default = {
  args: {}
}