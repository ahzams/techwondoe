import React, {useState , useEffect , useCallback} from 'react'
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import { client } from './client'
import Clients from './Components/Clients';
import Us from './Components/Us';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {

  const [content, setContent] = useState([])

    const res = (data) => {
        setContent(data)
        // console.log(data)
    }

    const getContent = useCallback(async () => {
        try{
            const response = await client.getEntry({ content_type: 'project' })
            const data = response.fields
            res(data)
        }
        catch(error){
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getContent()
    }, [getContent])

    const toggleItems = Object.assign({}, content.navToggle)
    const heroLink = Object.assign({}, content.heroLinks)
    const obj = Object.assign({}, content.heroArray)
    const obj1 = Object.assign({}, content.services)
    const obj2 = Object.assign({}, content.whyUs)
    const obj3 = Object.assign({}, content.cardOne)
    const obj4 = Object.assign({}, content.cardTwo)
    const obj5 = Object.assign({}, content.cardThree)
    const obj6 = Object.assign({}, content.photo)
    const contact = Object.assign({}, content.contact)
    const form = Object.assign({}, content.formField)
    const obj7 = Object.assign({}, content.blog)
    const obj8 = Object.assign({}, content.blogCard)
    const obj9 = Object.assign({}, content.blogCard2)
    const obj0 = Object.assign({}, content.blogImg)
    const obj11 = Object.assign({}, content.testimonials)
    
    console.log(content)

  return (
    <div className="min-h-screen bg-[rgb(17,17,17)] text-white">
      <Header toggle={toggleItems} navItems={content.navItems} logoTitle={content.logoTitle} heroLink={heroLink} />
      <Hero text1={obj[0]} text2={obj[1]} btnText1={obj[2]} btnText2={obj[3]} />
      {content.servicesGif && <Services serviceHead={obj1[0]} image={content.servicesGif.fields.file.url} types={content.servicesTypes} />}
      {content.clients && <Clients title={content.clientsTitle} client={content.clients} />}
      <Us title1={obj2[0]} title2={obj2[1]} title3={obj2[2]} title4={obj2[3]} point1={obj2[4]} point2={obj2[5]} point3={obj2[6]} point4={obj2[7]} point5={obj2[8]} point6={obj2[9]}/>
      {content.photo && <Testimonials cardOne={obj3} cardTwo={obj4} cardThree={obj5} photos={obj6} test={obj11} />}
      {content.findList && <Contact find={content.findHead} list={content.findList} formText={form} contact={contact} />}
      {content.blogImg && <Blog head1={obj7[0]} head2={obj7[1]} blogOne={obj8} blogTwo={obj9} blogImg={obj0} />}
      <Footer logoTitle={content.logoTitle} />
    </div>
  );
}

export default App;
