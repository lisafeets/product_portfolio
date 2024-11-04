import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
            <>
              <Layout>
                <Container>
                  <Header />
                </Container>
                <div className="bg-sky-50 pt-16 pb-16">
                  <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div>
                        <Image title={"lisafeets"} src={"/assets/about/annie.svg"} height={295} width={293} />
                      </div>
                      <div className="md:pr-8 md:col-span-2">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-12">
                          I build products.
                        </h1>
                        <p className="text-lg block text-slate-500 mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                          Velit officia consequat duis enim velit mollit. 
                          Exercitation veniam consequat sunt nostrud amet.</p>
                          <p className="text-lg block text-slate-500 mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                          Velit officia consequat duis enim velit mollit. 
                          Exercitation veniam consequat sunt nostrud amet.</p>
                          <p className="text-lg block text-slate-500 mb-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                          Velit officia consequat duis enim velit mollit. 
                          Exercitation veniam consequat sunt nostrud amet.</p>
                      </div>
                    </div>
                  </Container>
              </div>
              </Layout>
            </>
        //   )

    );
}

export default About;