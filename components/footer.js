import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-accent-2">
      <Container>
        <div className="py-28">
          <div className="flex justify-center items-center">
            <a className="mx-4" href="https://github.com/">
                <img alt="github logo" src={"/icons/github-fill.svg"} height={45} width={45} />
                <span className="invisible">Github</span>
            </a>
            <a className="mx-4"
              href="mailto:annieapple@gmail.om">
              <img alt="linkedin logo" src={"/icons/mail-fill.svg"} height={45} width={45} />
              <span className="invisible">Email</span>
            </a>
            <a className="mx-4" href="https://www.linkedin.com/">
                <img alt="linkedin logo" src={"/icons/linkedin-box-fill.svg"} height={45} width={45} />
                <span className="invisible">LinkedIn</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
