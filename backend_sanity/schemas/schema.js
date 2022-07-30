import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import workExperience from './workExperience'
import brands from './brands'
import contact from './contact'
import skills from './skills'
import works from './works'
import about from './about'
import experiences from './experiences'
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([testimonials,workExperience,brands,contact,skills,works,about,experiences
  ]),
})
