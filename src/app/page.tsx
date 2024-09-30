import * as Header from './components/header'
import * as Main from './components/main';
import * as Footer from './components/footer';
import UserName from './components/user-name';
import ProfessionalPosition from './components/professional-position';

export default function Home() {
  return (
   <>
   <Header.Header>
   <UserName> Kauan Barcelos Aguiar Rosa</UserName>
   <ProfessionalPosition>Software Developer</ProfessionalPosition>
   </Header.Header>

   <Main.Main>
    <>
    </>
   </Main.Main>

   <Footer.Footer>
    <>
    </>
   </Footer.Footer>
   </>
  );
}
