import { IoImagesOutline } from 'react-icons/io'

export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'object',
  icon: IoImagesOutline,
  fields: [
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [{ type: 'mainImage' }],
      description: 'Add one or more images.'
    }
  ],
  preview: {
    select: {
      images: 'images.length'
    },
    prepare({ images, media }) {
      return {
        title: `${images} image gallery`
      }
    }
  }
}