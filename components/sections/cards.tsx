import SectionLayout from "components/layouts/section"
import { Grid } from "theme-ui"
import IconCard, { IconCardProps } from "components/primitives/cards/icon"
import { FiUserCheck, FiCode, FiBriefcase } from "react-icons/fi"

const cards: IconCardProps[] = [
  {
    icon: <FiUserCheck />,
    title: "Participants",
    description:
      "The core of this open infrastructure is an open, blockchain based network, with 1000's of participants running video infrastructure to enable video streaming at scale.",
    link: { label: "/participants", href: "/participants" }
  },
  {
    icon: <FiCode />,
    title: "Developers",
    description:
      "This open network is built on the open source Livepeer Media Server, which you can build upon in your own video applications whether you want to use the scalable Livepeer network.",
    link: { label: "/developers", href: "/developers" }
  },
  {
    icon: <FiBriefcase />,
    title: "Enterprise",
    description:
      "Video platforms and applications can use this network to transcode live and on demand video at less than 10% of the cost of other solutions.",
    link: { label: "/enterprise", href: "/enterprise" }
  }
]

const CardsSection = () => (
  <SectionLayout
    titleLabel="Subtitle"
    title="Let Livepeer do your video's work"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    background="muted"
  >
    <Grid
      className="features-grid"
      gap={[4, null, null, 4]}
      sx={{
        gridTemplateColumns: [
          "sm",
          null,
          null,
          null,
          ({ sizes: { sm } }) => `repeat(3, ${sm})`
        ],
        mt: 5,
        mx: "auto",
        justifyContent: "center",
        position: "relative"
      }}
    >
      {cards.map((card) => (
        <IconCard key={`card-${card.title}`} {...card} />
      ))}
    </Grid>
  </SectionLayout>
)

export default CardsSection
