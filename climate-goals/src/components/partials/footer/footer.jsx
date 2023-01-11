import footerimg from '../../../images/KT-Logo.png'
import styles from './footer.module.scss'

const Footer = () => {
    return(
        <footer className={styles.footerMain}>
            <div className={styles.footerInfo}>
                <h3>KlimaTossen NPO</h3>
                <p>Vesterbrogade 92</p>
                <p>9000 Aalborg</p>
                <p>info@klima-tossen.dk</p>
                <p>9922 3344 (Åben man - fre: 08.00 - 16.00)</p>
                <h3>SAMARBEJDSPARTNERE:</h3>
                <a href="https://www.dn.dk">https://www.dn.dk</a>
                <a href="http://www.miljoeportal.dk">http://www.miljoeportal.dk</a>
                <div>
                    <img src={footerimg} alt="KT-Logo" />
                </div>
            </div>
            <div className={styles.footerForm}>
                <h3>Ja tak! Jeg vil gerne høre mere.</h3>
                <form>
                    <input type="text" placeholder='Fulde navn'/>
                    <input type="text" placeholder='Hjem by'/>
                    <input type="email" placeholder='Email adresse'/>
                    <input type="number" placeholder='Telefon nummer'/>
                    <label htmlFor="checkone">Få en samtale med Klimatossen</label>
                    <input name="checkone" type="checkbox"/>
                    <label htmlFor="checktwo">Modtag Nyhedsbrev</label>
                    <input name="checktwo" type="checkbox"/>
                    <button>Send</button>
                </form>
            </div>
        </footer>
    )
}
export { Footer }