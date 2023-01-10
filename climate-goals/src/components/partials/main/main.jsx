import { Section } from '../pages/section'
//importing images
import img1 from '../../../images/Icon-CO2.png'
import divider1 from '../../../images/Spacer-01.png'
import img2 from '../../../images/Icon-Climate.png'
import divider2 from '../../../images/Spacer-02.png'
import img3 from '../../../images/Icon-Checklist.png'
import divider3 from '../../../images/Spacer-03.png'
import img4 from '../../../images/Icon-Arrangement.png'
import divider4 from '../../../images/Spacer-04.png'


const Main = () => {
    return (
    <>
    <Section>
        <h2>HVAD ER CO2?</h2>
        <figure>
                <img src={img1} alt="CO2-logo" />
                <figcaption>
                    <h3>CO2 er en gasart der findes naturligt i Jordens atmosfære.</h3>
                    <p>- CO2, findes naturligt i atmosfæren.</p>
                    <p>- Livet, er afhængigt af CO2 da det regulerer temperaturen på Jorden.</p>
                    <p>- CO2, dannes oftest ved at mennesker og dyr, indånder ilt, og
                    udånder CO2. Planter optager CO2, og omdanner det til Ilt. Derved
	                opnåes en balance i CO2 "regnskabet"</p>
                    <p>- Afbrænding f.eks. af fossile brændstoffer, udleder CO2.</p>
                    <p>- Jordens skove og verdenshavene er den største "producent" af den
                    ilt, der er nødvendig, for liv på Jorden, som vi kender det.
                    </p>
                    <p>- Mennesket er den enlige faktor der har den største indflydelse på
                    CO2 -balancen på Jorden i dag!</p>
                    <a className='moreinfo' href="læsmere">Læs Mere</a>
                </figcaption>
            </figure>
            <img className="divider" src={divider1} alt="divider-one" />
    </Section>
    <Section>
    <h2>KLIMA OG MILJØ?</h2>
    <figure>
            <img src={img2} alt="climate-icon" />
            <figcaption>
                <h3>Kort om klimaet og miljøet?</h3>
                <p>- Klima og miljø hænger sammen.</p>
                <p>- Klimaforandringer påvirker miljøet og omvendt</p>
                <p>- Miljøet kan betragtes som en organisme, og er det vi baserer vores liv og overlevelse på, hvis vi ændrer i miljøet, har det oftest en dominoeffekt, der påvirker alle dele i miljøet.</p>
                <p>- Ændringer i atmosfærens CO2 og Ozonlag påvirker miljøet på hele kloden, med ændringer i temperatur og nedbør som følge.</p>
                <p>- Ændrede temperaturer og nedbørsmønster påvirker ikke kun kældre og infrastruktur, men også biodiversiteten som planter insekter mm.</p>
                <p>- Din adfærd påvirker klimaet i størrer eller mindre grad.</p>
                <a className='moreinfo' href="læsmere">Læs Mere</a>
            </figcaption>
        </figure>
        <img className="divider" src={divider2} alt="divider-two" />
    </Section>
    <Section>
    <h2>HVORDAN KAN JEG BIDRAGE?</h2>
    <figure>
            <img src={img3} alt="icon-checklist" />
            <figcaption>
                <h3>Hvordan belaster du miljøet mindst muligt i dagligdagen?</h3>
                <p>- Dit forbrug overordnet herunder din produktion af affald, bidrager til udledning af CO2</p>
                <p>- Fødevareproduktion har stor indflydelse på CO2 balancen, tænk over dit valg i dagligdagen.</p>
                <p>- Din bolig og den måde du har indrettet dig påvirker miljøet.</p>
                <p>- Jordens skove og verdenshavene er den største "producent" af den ilt, der er nødvendig, for liv på Jorden, som vi kender det.</p>
                <p>- Mennesket er den enlige faktor der har den største indflydelse på CO2 -balancen på Jorden i dag!</p>
                <p>- Du kan påvirke CO2 balancen, både ved at ændre små ting i din hverdag, eller ved aktivt deltage i kampen for et bedre miljø.</p>
                <a className='moreinfo' href="læsmere">Læs Mere</a>
            </figcaption>
        </figure>
        <img className="divider" src={divider3} alt="divider-three" />
    </Section>
    <Section>
    <h2>DELTAG I ARRANGEMENT</h2>
    <figure>
            <img src={img4} alt="icon-cleaning" />
            <figcaption>
                <h3>Deltag i eet af vores arrangementer og gør en forskel!Hvordan belaster du miljøet mindst muligt i dagligdagen?</h3>
                <p>- “Combing” - ”at fjerne affald”, f.eks. beachcombing: , rense stranden for affald og elementer der ikke hører hjemme her.  Invester en dag med familien i naturen og sammen med andre.</p>
                <p>- Tilmeld dig eet arrangement i dit område</p>
                <p>- Tag ansvar hjælp dit nærområde og os alle sammen generelt.</p>
                <p>- Mød nye mennesker omkring en fælles opgave.</p>
                <p>- Tag famillien med på en dag for naturen og vores fremtid..</p>
                <p>- Tilmeld dig eet af vore arrangementer, eller modtag information om Klimatossen!</p>
                <a className='moreinfo' href="læsmere">Læs Mere</a>
            </figcaption>
        </figure>
        <img className="divider" src={divider4} alt="divider-four" />
    </Section>
    </>
    
    )
}


export { Main }