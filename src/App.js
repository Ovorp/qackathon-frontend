import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import downloadPostman from "./images/downloadPostman.jpg";
import createCollection from "./images/2CreateCollection.jpg";
import birds from "./images/3Birds.jpg";
import addRequest from "./images/4AddRequest.jpg";
import initialApiCall from "./images/5InitialApiCall.jpg";
import auth from "./images/6Auth.jpg";
// import authKey from "./images/7AuthKey.jpg";
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

function App() {
  return (
    <div className="App">
      {/* <!--Header--> */}
      <header>
        <div className="heading">
          <h1> Postman Jungle Safari </h1>
          <h2> Uncover the rare bird </h2>
        </div>
      </header>

      {/* <!--Postman Jungle Safari Story Begins--> */}

      <main>
        <div>
          {/* <i className='fas fa-camera fa-4x' id="cameraIcon" /> */}
          <i className="bi bi-camera-fill camera"></i>
          <p>
            You have been hired by the Safari Seekers Group to go on a quest to
            find a rare bird located in the deepest part of the mysterious
            Postman Jungle.
          </p>

          <p id="second">
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

          {/* <!--Instruction on how to install postman-->  */}

          <div>
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
                Install postman on your computer. Skip the prompt that ask you
                to create an account.
              </li>
              <li>Do not create an account</li>
              <li>
                Open your Postman app and select collections on the left panel
              </li>
              <li>
                Create a new collection (you can name it whatever you want)
              </li>
              <li>Create a new request</li>
            </ul>
          </div>
          <img src={downloadPostman} alt="download postman" />
          <img src={createCollection} alt="create collection" />
          <img src={birds} alt="birds" />
          <img src={addRequest} alt="adding a request" />

          {/* <!--Instruction on how to create a request in postman-->  */}

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
              <p id="startGetRequestAccess">
                https://quackathon-2022-server.herokuapp.com/start
              </p>
            </p>
          </section>
          <img src={initialApiCall} alt="api call" />

          <p>
            After you send your first GET request you realize that the response
            you got back shows an "authorization" value.
          </p>

          <img src={auth} alt="auth" />

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
              <p id="birdGetRequest">
                https://quackathon-2022-server.herokuapp.com/birds
              </p>
            </p>
          </section>
          {/* <img src={authKey} alt="auth key" /> */}

          <img src={headerImg} alt="header" />
          <img src={endpoint} alt="endpoint" />
        </div>

        <section>
          <h3>Warning</h3>
          <p>
            When using a GET request to find information on specific birds by
            their common name, you must be whitespace sensitive. Hint:
            “/birds/bodies/:commonName” is an endpoint that is whitespace
            sensitive. A possible URL to use in the GET request is{" "}
          </p>

          <p id="birdGetRequest">
            https://quackathon-2022-server.herokuapp.com/birds/bodies/greater
            prairie-chicken
          </p>
        </section>

        <img src={tenGet} alt="ten get" />

        <section>
          <h3>On to the next request:</h3>
          <p>
            {" "}
            A POST request adds new information (generally into the database)
            There is a lot of information to keep track of in the Postman Jungle
            database. To post important information in your own notebook, you
            will need to send a POST request with this URL:
          </p>

          <p id="birdGetRequest">
            https://quackathon-2022-server.herokuapp.com/notebooks
          </p>

          <p>
            You will also need to make sure you have a body with the post to
            insert your username. Make sure it is unique!
          </p>
        </section>
        <img
          class="postmanScreenShots"
          src={POSTnotebookRequest}
          alt="Post notebook request"
        />

        <div class="requests">
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

          <p class="birdGetRequest">
            https://quackathon-2022-server.herokuapp.com/notebooks/:notebook_id
          </p>

          <p>
            Make sure you end the URL with your specific notebook id number!
          </p>
        </div>

        <img class="postmanScreenShots" src={GETNotebook} alt="Get notebook" />

        <div class="requests">
          <h3>You can update your notebook in this next request:</h3>
          <p>
            {" "}
            A PUT request changes information (generally into the database). As
            you find new information on the rare bird, you will need to update
            your notebook. You can also make changes if you posted incorrect
            information for the hidden bird. To update information in your own
            notebook you will need to send a PUT request with this URL:{" "}
          </p>

          <p class="birdGetRequest">
            https://quackathon-2022-server.herokuapp.com/notebooks
          </p>

          <p>
            You will also need to make sure you have a body with the post to
            insert information on the different attributes. You will need to
            include your notebook id within the body of the request in order for
            the new information to be posted to the correct place. If you do not
            put new info into the notebook the value will remain “null”.
          </p>
        </div>

        <img class="postmanScreenShots" src={PUTRequest} alt="Put request" />

        <div class="requests">
          <h3>Submit the bird name for the win in this next request:</h3>
          <p>
            {" "}
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

          <p class="birdGetRequest">
            https://quackathon-2022-server.herokuapp.com/answers
          </p>
        </div>

        <img
          class="postmanScreenShots"
          src={POSTRequestAnswer}
          alt="Post request answer"
        />

        <div class="requests">
          <h3>Add your name to the leaderboard in this next request:</h3>
          <p>
            {" "}
            Don’t forget to post your username and favorite animal to the
            leaderboard in the body of the request! Make your name as one of the
            greatest QA hunters ever!! You will need to send a POST request with
            this URL:
          </p>

          <p class="birdGetRequest">
            {" "}
            https://quackathon-2022-server.herokuapp.com/leaderboard
          </p>

          <h3>Happy hunting!</h3>
        </div>

        <img class="postmanScreenShots" src={leaderboard} alt="leaderboard" />
      </main>

      <div id="leadboard">
        <h3>Leaderboard</h3>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
              <th scope="col">Favorite Animal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Nathan</th>
              <td></td>
              <td>lion</td>
            </tr>
            <tr>
              <th scope="row">Bren</th>
              <td></td>
              <td>peacock</td>
            </tr>
            <tr>
              <th scope="row">Karen</th>
              <td></td>
              <td>seal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <div className="profile">
          <p>Nathan Shirts</p>
          <img className="contributors" id="nate" src={nathan} alt="nathan" />
        </div>
        <div className="profile">
          <p>Bren Mace</p>
          <img className="contributors" src={bren} alt="bren" />
        </div>
        <div className="profile">
          <p>Karen Holland</p>
          <img className="contributors" src={karen} alt="karen" />
        </div>
        <div className="profile">
          <p>Tammy Ritchey</p>
          <img className="contributors" src={tammy} alt="tammy" />
        </div>
      </footer>
    </div>
  );
}

export default App;
