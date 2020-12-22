import Img from 'react-optimized-image'

interface HeroImageProps {
  blogSlug: string
  heroImageName: string
}

export const HeroImage: React.FC<HeroImageProps> = ({
  blogSlug,
  heroImageName,
}: HeroImageProps) => {
  if (heroImageName) {
    return (
      <Img
        // src={require(`${process.cwd()}/src/content/${blogSlug}/assets/${heroImageName}`)}
        src={require(`../content/${blogSlug}/assets/${heroImageName}`)}
        alt={blogSlug}
        webp
        sizes={[400, 800]}
        // className="sm:w-250 sm:w-400 h-300 w-800"
      />
    )
  }
  return (
    <Img
      src={require('../../public/defaultImages/defaultBlogHero.png')}
      alt={blogSlug}
      webp
      sizes={[400, 800]}
    />
  )
}
