import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import downloadPostman from "./images/downloadPostman.jpg";
import createCollection from "./images/2CreateCollection.jpg";
import birds from "./images/3Birds.jpg";
import addRequest from "./images/4AddRequest.jpg";
import initialApiCall from "./images/5InitialApiCall.jpg";
import auth from "./images/6Auth.jpg";
import authKey from "./images/7AuthKey.jpg";
import headerImg from "./images/8Header.jpg";

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
          <i className="bi bi-camera-fill"></i>
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

          <div id="installPostman">
            <p id="installPostmanSteps">
              Here are some steps to get you ready to hunt through the database:
            </p>

            <p>
              You will need to download the postman app from{" "}
              <a href="https://www.postman.com/downloads/">
                postman.com/downloads
              </a>
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
          <img src={addRequest} alt='adding a request' />

          {/* <!--Instruction on how to create a request in postman-->  */}

          <p>
            You realized you don’t know much about the Postman app. Fortunately,
            you found a notbook with steps to access the Postman Jungle database
            that you had to pry from the hands of a dead anthropologist who, you
            found out later, had gotten too close to an alligator wrestling with
            an electric eel. The edges were a little singed and muddy, but
            luckily for you it is still legible...
          </p>

          <div className="firstGet">
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
          </div>
          <img src={initialApiCall} alt="api call" />

          <p>
            After you send your first GET request you realize that the response
            you got back shows an "authorization" value.
          </p>

          <img src={auth} alt="auth" />

          <div id="authorization">
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

            <p> Now your ready to make your next request.</p>

            <p>
              (Hint: “/birds” is an endpoint that needs authorization for you to
              access information. The birds endpoint is a cheat sheet for all
              the endpoints you can make to the server. Think of it like a menu.
              The URL to use in the GET request is
              <p id="birdGetRequest">
                https://quackathon-2022-server.herokuapp.com/birds)
              </p>
            </p>
          </div>
          <img src={authKey} alt="auth key" />

          <img src={headerImg} alt="header" />
        </div>
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
          <img
            class="contributors"
            src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/41606140_10160742485655065_1573059878425985024_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Oq2L4TKdze8AX92NuJP&_nc_ht=scontent-lax3-2.xx&oh=00_AT--cpdo7Ry5YkLTCvmKijlshuwDYg_NugbnQZzFZYXU5Q&oe=62FF7993"
            alt="Tammy"
          />
        </div>
        <div className="profile">
          <p>Bren Mace</p>
        </div>
        <div className="profile">
          <p>Karen Holland</p>
        </div>
        <div className="profile">
          <p>Tammy Ritchey</p>

          <img
            class="contributors"
            src="https://lh3.googleusercontent.com/IIO3Llt0XrnISaAeevTwwveCeUKiW5OQJdLv09d8B54raCkAzGGIRK26IRcqPCECUUVzUoUrLfzmVYIeJaXKULPmJaSm7oOt-Qrk8lFR7XLRT5jWPixYXtX8TT5Rwg3cvkblyJATz2odBk-DmWEgrcEZHEzrE_7jFJquTTxToJwRjpy-uhZrG55p4ym4wwYl34rINyfCapaE6hU_gyLTBfiZg61h3odOsD73scvmfE-iLpNAMhMONARUGewESXNlqw11DU39akSLnCJNBJqZhVJ4podqNKedXJs7XHQDdnGOaoQ3cFWLCOR6oDQeck8pE0wqvAPxyEAFLxqHWqCoVR7vwS_OD0204ra9Pe3vGZzPa2n2Nb4Vr7byr-4E0rN6E0ppecRN89R1yC2d5NSjK47dI3zHi5buDA_S07J6ERYEPU4GMKoof9ABw-Pmu95a4ayP_IuO2ApIXZFZDVWpgTMcOl05zfAHgXb6nx3kBLwgK2_Qi7TNRyhTwTUjcGel4i71f4xIya3Ih0TnDIJM9c6BNIetblnhZ9RHfYf9yFXomCHSsxk1dmV3fUh9NBlP7i8kX_wQGjdUnSEyR-0h2LXlE55f4PtuJdBhPDb4R92SfjL-15cIGNL0d9ijQbyui_94jVPvZ7L8sExSDKuYD6vOb5c7FqDVhajCXerdcqj-7ueCcRQiH3a3jDB_Yy-weTkIEiEKPp7RqY5eRsGSljotmPKvFQ9zSdv5Tl11jWZ_e_FTexIuZVoHJF4=w638-h847-no?authuser=0"
            alt="Tammy"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
