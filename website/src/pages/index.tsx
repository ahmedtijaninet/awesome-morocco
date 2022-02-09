import { Header } from '@/components'

const Index = () => {
  const sections = [
    {
      pageLink: '/',
      title: 'The List of awesome Moroccan things for developers',
      description:
        'The place where you gonna find out great things, made by great Moroccans',
    },
    {
      pageLink: '/',
      title: 'The List of awesome Moroccan things for developers',
      description:
        'The place where you gonna find out great things, made by great Moroccans',
    },
  ]

  return (
    <div className="grow">
      {sections.map((el, i) => (
        <Header {...el} key={`index-${i}`} />
      ))}
    </div>
  )
}

export default Index
