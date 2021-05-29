import React from 'react';
import { useParams } from 'react-router';
import { getPerson } from '../../utils/starApi';
import styles from "./Person.module.css";
import { VscLoading } from "react-icons/vsc";
import { FaBirthdayCake, FaWeight } from "react-icons/fa";
import { GiBodyHeight } from "react-icons/gi";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";

function Person() {
  const {id} = useParams();
  const [person, setPerson] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    requestPerson();
  }, [id]);

  const requestPerson = async () => {
    setIsLoading(true);
    try {
       setPerson(await getPerson(id));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  return isLoading ? <VscLoading size="50px" color="yellow"/> : (
    person && 
      <div className={styles.person}>
      <h1>{person.name}</h1>
      <div className={styles.description}>
        <h2 className={styles.person}><FaBirthdayCake size="30px" color="yellow"/> {person.birth_year}</h2>
        <h2 className={styles.person}><FaWeight size="30px" color="yellow"/> {person.mass} lbs</h2>
        <h2 className={styles.person}><GiBodyHeight size="30px" color="yellow" /> {person.height} cm</h2>
        {person.gender === "male" ?
          <h2 className={styles.person}><CgGenderMale size="30px" color="yellow" /> {person.gender}</h2>
        :   <h2 className={styles.person}><CgGenderFemale size="30px" color="yellow"/> {person.gender}</h2>
        }
      </div>
      </div>
  );
}

export default Person;
