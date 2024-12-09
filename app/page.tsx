import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroTitle, HeroSubTitle } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <main>
        <Container className="pt-[6.4rem]">
          <Hero>
            <Button href="/" variant="secondary" size="small">
              Linear 2022 Release – Built for scale
            </Button>
            <HeroTitle>
              Linear is a better way
              <br className="hidden md:block" /> to build products
            </HeroTitle>
            <HeroSubTitle>
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and
              product roadmaps.
            </HeroSubTitle>
            <img src="/hero.webp" alt="Hero Img" />
          </Hero>
        </Container>
      </main>
    </div>
  );
}
