import {useState, useEffect} from 'react';
import axios from 'axios';
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import downloadPostman from "./images/downloadPostman.jpg";
import createCollection from "./images/2CreateCollection.jpg";
import birds from "./images/3Birds.jpg";
import addRequest from "./images/4AddRequest.jpg";
import initialApiCall from "./images/5InitialApiCall.jpg";
import auth from "./images/6Auth.jpg";
import headerImg from "./images/8Header.jpg";
import endpoint from "./images/9Endpoints.jpg";
import tenGet from "./images/10Get.jpg";
import POSTnotebookRequest from "./images/12POSTNotebookRequest.png";
import GETNotebook from "./images/13GETNotebook.png";
import PUTRequest from "./images/14PUTRequest.png";
import POSTRequestAnswer from "./images/15POSTRequestAnswer.png";
import leaderboard from "./images/16leaderboard.png";
import nathan from "./images/nate.png";
import bren from "./images/Bren.png";
import karen from "./images/karen.jpg";
import tammy from "./images/Tammy.png";
import React from "react";





function App() {
  const [leader, setLeader] = useState([]);
  const [style0, setStyle0] = useState('hide')
  const [style1, setStyle1] = useState('hide')
  const [style2, setStyle2] = useState('hide')
  const [style3, setStyle3] = useState('hide')
  const [style4, setStyle4] = useState('hide')
  const [style5, setStyle5] = useState('hide')
  const [style6, setStyle6] = useState('hide')
  const [style7, setStyle7] = useState('hide')
  const [style8, setStyle8] = useState('hide')
  const [style9, setStyle9] = useState('hide')
  const [style10, setStyle10] = useState('hide')
  const [style11, setStyle11] = useState('hide')
  const [style12, setStyle12] = useState('hide')
  const [style13, setStyle13] = useState('hide')
  // const [style14, setStyle14] = useState('hide')
  // const [style15, setStyle15] = useState('hide')


  function hideImg(num) {
    switch(num) {
      case 0:
        if (style0 === 'show') {
          setStyle0('hide')
        } else {
          setStyle0('show')
        }
        break;
        case 1:
        if (style1 === 'show') {
          setStyle1('hide')
        } else {
          setStyle1('show')
        }
        break;
        case 2:
        if (style2 === 'show') {
          setStyle2('hide')
        } else {
          setStyle2('show')
        }
        break;
        case 3:
        if (style3 === 'show') {
          setStyle3('hide')
        } else {
          setStyle3('show')
        }
        break;
        case 4:
        if (style4 === 'show') {
          setStyle4('hide')
        } else {
          setStyle4('show')
        }
        break;
        case 5:
        if (style5 === 'show') {
          setStyle5('hide')
        } else {
          setStyle5('show')
        }
        break;
        case 6:
        if (style6 === 'show') {
          setStyle6('hide')
        } else {
          setStyle6('show')
        }
        break;
        case 7:
        if (style7 === 'show') {
          setStyle7('hide')
        } else {
          setStyle7('show')
        }
        break;
        case 8:
        if (style8 === 'show') {
          setStyle8('hide')
        } else {
          setStyle8('show')
        }
        break;
        case 9:
        if (style9 === 'show') {
          setStyle9('hide')
        } else {
          setStyle9('show')
        }
        break;
        case 10:
        if (style10 === 'show') {
          setStyle10('hide')
        } else {
          setStyle10('show')
        }
        break;
        case 11:
        if (style11 === 'show') {
          setStyle11('hide')
        } else {
          setStyle11('show')
        }
        break;
        case 12:
        if (style12 === 'show') {
          setStyle12('hide')
        } else {
          setStyle12('show')
        }
        break;
        case 13:
        if (style13 === 'show') {
          setStyle13('hide')
        } else {
          setStyle13('show')
        }
        break;
        // case 14:
        // if (style14 === 'show') {
        //   setStyle14('hide')
        // } else {
        //   setStyle14('show')
        // }
        // break;
        // case 15:
        //   if (style15 === 'show') {
        //     setStyle15('hide')
        //   } else {
        //     setStyle15('show')
        //   }
        //   break;
      default: 
        break;
    }
        
  }

  useEffect(() => {
    function getLeaderboard() {
      axios.get(`https://quackathon-2022-server.herokuapp.com/leaderboard`).then(response => {
        setLeader(response.data)
      })
    }
    getLeaderboard()
  }, [])

  return (
    <div className="App">
      <header>
        <div className="heading">
          <h1> Postman Jungle Safari </h1>
          <h2> Uncover the rare bird </h2>
        </div>
      </header>

      <main>
        <div>
          <i className="bi bi-camera-fill camera"></i>
          <p>
            You have been hired by the Safari Seekers Group to go on a quest to
            find a rare bird located in the deepest part of the mysterious
            Postman Jungle.
          </p>

          <p>
            You will need to find the scientific name of this rare bird in order
            to get a research grant to help save this member of the Anatidae
            family. All you know is the bird is about 20 inches tall and is
            nonmigratory.
          </p>

          <p>
            You have searched for hours on the internet and in reference books
            with no results. As time is running out you remember there is a
            Postman Jungle database that may give you clues to what this
            mysterious bird is. In desperation you decide to search this
            database using the Postman App.
          </p>

          <p>
            Here are some steps to get you ready to hunt through the database:
          </p>

          <p>
            You will need to download the postman app from{" "}
            <a href="https://www.postman.com/downloads/">
              postman.com/downloads
            </a>{" "}
            to get started.
          </p>

          <ul>
            <li>
              Install postman on your computer. Skip the prompt that ask you to
              create an account.
            </li>
            <li>Do not create an account</li>
            <li>
              Open your Postman app and select collections on the left panel
            </li>
            <li>Create a new collection (you can name it whatever you want)</li>
            <li>Create a new request</li>
          </ul>
      
          <button onClick={() => hideImg(0)}>{style0 === 'hide' ? '>' : 'v'}</button>
          <img className={style0} src={downloadPostman} alt="download postman" />
      
          <button onClick={() => hideImg(1)}>{style1 === 'hide' ? '>' : 'v'}</button>
          <img className={style1}src={createCollection} alt="create collection" />
          <button onClick={() => hideImg(2)}>{style2 === 'hide' ? '>' : 'v'}</button>
          <img className={style2}src={birds} alt="birds" />
          <button onClick={() => hideImg(3)}>{style3 === 'hide' ? '>' : 'v'}</button>
          <img className={style3}src={addRequest} alt="adding a request" />

          <p>
            You realized you don’t know much about the Postman app. Fortunately,
            you found a notbook with steps to access the Postman Jungle database
            that you had to pry from the hands of a dead anthropologist who, you
            found out later, had gotten too close to an alligator wrestling with
            an electric eel. The edges were a little singed and muddy, but
            luckily for you it is still legible...
          </p>

          <section>
            <p>
              The first step on your journey is to make a GET request. A Get
              request retrieves bits of information from the database.
            </p>

            <p>
              To access the Postman Jungle database, you will need to send a GET
              request with this URL:
            </p>
              <p className='url'>
                https://quackathon-2022-server.herokuapp.com/start
                <i className="bi bi-clipboard2-fill clipboard"></i>
              </p>
          </section>
          <button onClick={() => hideImg(4)}>{style4 === 'hide' ? '>' : 'v'}</button>
          <img className={style4} src={initialApiCall} alt="api call" />

          <p>
            After you send your first GET request you realize that the response
            you got back shows an "authorization" value.
          </p>
          <button onClick={() => hideImg(5)}>{style5 === 'hide' ? '>' : 'v'}</button>
          <img className={style5}src={auth} alt="auth" />

          <section>
            <p>
              Sometimes GET requests require authorization to access the
              information at a given endpoint. So for your next task you need to
              add the authoriztaion value that you received in the response you
              got back from the start request you made previously.
            </p>
            <p>
              First change the Authorization type in the Authorization tab to
              "no Auth". Then in the "Headers" tab add a Key /value pair. - Key
              = authorization and the Value = the value you received in the
              response.
            </p>

            <p> Now you're ready to make your next request.</p>

            <p>
              Hint: “/birds” is an endpoint that needs authorization for you to
              access information. The birds endpoint is a cheat sheet for all
              the endpoints you can make to the server. Think of it like a menu.
              The URL to use in the GET request is
            </p>
              <p className="url">
                https://quackathon-2022-server.herokuapp.com/birds
                <i className="bi bi-clipboard2-fill clipboard"></i>
              </p>
          </section>
          <button onClick={() => hideImg(6)}>{style6 === 'hide' ? '>' : 'v'}</button>
          <img className={style7} src={headerImg} alt="header" />
          <button onClick={() => hideImg(7)}>{style7 === 'hide' ? '>' : 'v'}</button>
          <img className={style8} src={endpoint} alt="endpoint" />
        </div>

        <section>
          <h3>Warning</h3>
          <p>
            When using a GET request to find information on specific birds by
            their common name, you must be whitespace sensitive. Hint:
            “/birds/bodies/:commonName” is an endpoint that is whitespace
            sensitive. A possible URL to use in the GET request is{" "}
          </p>

          <p className="url">
            https://quackathon-2022-server.herokuapp.com/birds/bodies/greater
            prairie-chicken
            <i className="bi bi-clipboard2-fill clipboard"></i>
          </p>
        </section>
        <button onClick={() => hideImg(8)}>{style8 === 'hide' ? '>' : 'v'}</button>
        <img className={style8} src={tenGet} alt="ten get" />

        <section>
          <h3>On to the next request:</h3>
          <p>
            {" "}
            A POST request adds new information (generally into the database)
            There is a lot of information to keep track of in the Postman Jungle
            database. To post important information in your own notebook, you
            will need to send a POST request with this URL:
          </p>

          <p className="url">
            https://quackathon-2022-server.herokuapp.com/notebooks
            <i className="bi bi-clipboard2-fill clipboard"></i>
          </p>

          <p>
            You will also need to make sure you have a body with the post to
            insert your username. Make sure it is unique!
          </p>
        </section>
        <button onClick={() => hideImg(9)}>{style9 === 'hide' ? '>' : 'v'}</button>
        <img
          className={style9}
          src={POSTnotebookRequest}
          alt="Post notebook request"
        />

        <section>
          <h3>See whats in your notebook in this next request:</h3>
          <p>
            {" "}
            You can also GET information from your notebook when trying to
            determine what you know and what information you need in order to
            uncover the rare bird. Notice that you only see one set of different
            attributes. Make sure you only fill in information you find on the
            attributes of the rare bird you are hunting, and not information on
            other birds in the database. To access your notebook information,
            you will need to send a GET request with this URL:
          </p>

          <p className="url">
            https://quackathon-2022-server.herokuapp.com/notebooks/:notebook_id
            <i className="bi bi-clipboard2-fill clipboard"></i>
          </p>

          <p>
            Make sure you end the URL with your specific notebook id number!
          </p>
        </section>
        <button onClick={() => hideImg(10)}>{style10 === 'hide' ? '>' : 'v'}</button>
        <img className={style10} src={GETNotebook} alt="Get notebook" />

        <section>
          <h3>You can update your notebook in this next request:</h3>
          <p>
            {" "}
            A PUT request changes information (generally into the database). As
            you find new information on the rare bird, you will need to update
            your notebook. You can also make changes if you posted incorrect
            information for the hidden bird. To update information in your own
            notebook you will need to send a PUT request with this URL:
          </p>

          <p className="url">
            https://quackathon-2022-server.herokuapp.com/notebooks
            <i className="bi bi-clipboard2-fill clipboard"></i>
          </p>

          <p>
            You will also need to make sure you have a body with the post to
            insert information on the different attributes. You will need to
            include your notebook id within the body of the request in order for
            the new information to be posted to the correct place. If you do not
            put new info into the notebook the value will remain “null”.
          </p>
        </section>
        <button onClick={() => hideImg(11)}>{style11 === 'hide' ? '>' : 'v'}</button>
        <img className={style11} src={PUTRequest} alt="Put request" />

        <section>
          <h3>Submit the bird name for the win in this next request:</h3>
          <p>
           
            Now that you have access to the Postman Jungle, you need to hunt
            through the database to find the scientific name of that rare bird
            for the Safari Seekers Group. Make sure to fill in your notebook
            with any information you find on that hidden bird. Once your
            notebook is full, you will be able to submit the scientific name and
            win the research grant!
          </p>

          <p>
            To submit your answer to the Safari Seekers Group, make a post with
            the rare bird’s scientific name in the body. You will need to send a
            POST request with this URL:
          </p>

          <p className="url">
            https://quackathon-2022-server.herokuapp.com/answers
            <i className="bi bi-clipboard2-fill clipboard"></i>
          </p>
        </section>
        <button onClick={() => hideImg(12)}>{style12 === 'hide' ? '>' : 'v'}</button>
        <img
          className={style12}
          src={POSTRequestAnswer}
          alt="Post request answer"
        />

        <section>
          <h3>Add your name to the leaderboard in this next request:</h3>
          <p>
           
            Don’t forget to post your username and favorite animal to the
            leaderboard in the body of the request! Make your name as one of the
            greatest QA hunters ever!! You will need to send a POST request with
            this URL:
          </p>

          <p className="url">
        
            https://quackathon-2022-server.herokuapp.com/leaderboard
            <i className="bi bi-clipboard2-fill clipboard"></i>
          </p>

          <h3>Happy hunting!</h3>
        </section>
        <button onClick={() => hideImg(13)}>{style13 === 'hide' ? '>' : 'v'}</button>
        <img className={style13} src={leaderboard} alt="leaderboard" />
      </main>

      <div>
        <h3>Leaderboard</h3>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Animal</th>
            <th>Date</th>
          </tr>

          </thead>
          <tbody>
        { leader.length > 0 ? leader.map(val => {
          return (
            <tr key={val.id}>
              <th>{val.username}</th>
              <th>{val.animal}</th>
              <th>{val.today_date.substring(0,10)}</th>
            </tr>
            )
          }) : <></>}

          </tbody>
          </table>

      </div>

      <footer>
      <h3>Contributors:</h3>
          <div id='profile'>

        <div className="profile">
          <h4>Nathan Shirts</h4>
          <img className="contributors" id="nate" src={nathan} alt="nathan" />
        </div>
        <div className="profile">
          <h4>Bren Mace</h4>
          <img className="contributors" src={bren} alt="bren" />
        </div>
        <div className="profile">
          <h4>Karen Holland</h4>
          <img className="contributors" src={karen} alt="karen" />
        </div>
        <div className="profile">
          <h4>Tammy Ritchey</h4>
          <img className="contributors" src={tammy} alt="tammy" />
        </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
