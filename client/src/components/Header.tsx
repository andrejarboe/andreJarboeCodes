import Link from 'next/link'

import { Container } from './Container'

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
        <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              Andre Jarboe
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}

