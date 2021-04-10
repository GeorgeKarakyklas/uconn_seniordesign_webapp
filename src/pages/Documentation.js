import React from 'react';
import { Container, Title, Subtitle, TOC, SectionTitle, Text, Code } from '../styled/DocsStyled';
import config from "../images/config.png";
import responder from "../images/responder.png";
import hardhat from "../images/hardhat.png";

export const Documentation = () => (
  <Container>
    <Title>DOCUMENTATION</Title>
    <TOC>
    <div id="toc_container">
      <p class="toc_title">Contents</p>
      <ul class="toc_list">
        <li><a href="#/docs/1">1. Finding a Quality Data Source</a></li>
        <li><a href="#/docs/2">2. Utilizing the Zap Oracle Template</a></li>
        <li><a href="#/docs/3">3. Testing with Zap Hardhat</a></li>
      </ul>
    </div>
    </TOC>
    <Subtitle>How to Create an Oracle on the Zap Platform</Subtitle>
    <SectionTitle id="/docs/1">1. Finding a Quality Data Source</SectionTitle>
    <Text>
      The first step in creating an oracle is identifying a stream of data that people might find valuable (It is important to remember that your oracle 
      will be a part of the Zap oracle marketplace, wherein users may bond and speculate on your bonding curve).
      <br></br><br></br>
      This will require an oracle provider to either find an already existing and trusted data source (API) or to simply create their own. When using a 3rd 
      party API, like within this project, it is crucial to read the source's terms and conditions of use before moving forward.
    </Text>
    <SectionTitle id="/docs/2">2. Utilizing the Zap Oracle Template</SectionTitle>
    <Text>
      The oracle template is a tool that was built by the Zap team with the purpose of allowing any 3rd party to easily build an oracle and instantly begin 
      selling data on the marketplace. We have been able to do that, utilizing it as the backbone of this project. This tutorial will highlight in detail 
      all the neccesary steps towards altering and changing it.
      <br></br><br></br>
      First, create a directory within which the Zap oracle template can be cloned directly from GitHub.
    </Text>
    <Code>$ mkdir myOracle</Code>
    <Code>$ cd myOracle</Code>
    <Code>$ git clone https://github.com/zapproject/zap-oracle-template</Code>
    <Code>$ cd zap-oracle-template/Oracle</Code>
    <br></br>
    <Text>
      Next, the Config.json within the Oracle folder needs to be modified. The title field will represent the name of the provider. Public key, as well as 
      the node URL and mnemonic, do no require any changes as of yet, since we will later focus on testing locally prior to deploying on any other networks. 
      You are more than welcome to input your own values for the name, curve, and md fields. Within the queryList element you will have to provide a 
      description of the structure that incoming queries must adhere to.
    </Text>
    <br></br>
    <a href="https://github.com/GeorgeKarakyklas/SCORACLE.BB-demo/blob/master/Oracle/Config.json"><img src={config} ></img></a>
    <br></br>
    <br></br>
    <Text>
      The only thing left to modify lies in the responder.ts file. Within it, the getResponse() function must be changed to accept the proper parameters 
      (as specified in the config.json) and use them with the purpose of querying the data from the previously selected source. Below lies a blank function 
      that would require modification, but feel free to click on the image and take a look at a finished product.
    </Text>
    <br></br>
    <a href="https://github.com/GeorgeKarakyklas/SCORACLE.BB-demo/blob/master/Oracle/Responder.ts"><img src={responder} ></img></a>
    <br></br>
    <SectionTitle id="/docs/3">3. Testing with Zap Hardhat</SectionTitle>
    <Text>
      In this section of the tutorial, we are going to focus on testing our template with zap hardhat. Another extremely useful open-source tool developed 
      by Zap, it gives developers the ability to test their oracles locally prior to deployment by simulating a blockchain within which the Zap infrastructure 
      will already lie. Testing our oracle was as easy as adjusting a few parametes in a pre-existing file. Said script is being depicted below. However, 
      before we get to editing this script we must clone this repository within the folder that was created earlier as well.
    </Text>
    <Code>$ cd ../..</Code>
    <Code>$ git clone https://github.com/zapproject/zap-hardhat.git</Code>
    <Code>$ cd zap-hardhat</Code>
    <Code>$ git checkout feature/typescript-oracle-dispatch</Code>
    <br></br>
    <Text>
      The first neccesary change of note we have to make is relatively easy. Browse to the tasks folder and create a new javascript file. Additionally, 
      within the hardhat.config.ts file, we must make sure that the file we just created is being imported along with all other task files. Once this step 
      is completed, we can copy the code from the dispatchCoinGecko task and paste it into the new file we created. For future reference this file will be 
      called dispatchTestTask. Within our dispatchTestTask file we must change a few things. The first will be task name on line 7. We also need to change 
      the title, endpoint, query, and params variables to their respective names and uses for our oracle. The title and andpoint should match those written 
      in the Config.json file from Section 2. The query variable should be a string type and all parameters accepted by our must be converted to the bytes32 
      format. I would stronlgy suggest taking a closer look at the differences between the code provided below and the code within dispatchCoinGecko if 
      additional help feels neccesary.
    </Text>
    <br></br>
    <a href="https://github.com/GeorgeKarakyklas/SCORACLE.BB-demo/blob/master/Oracle/Responder.ts"><img src={hardhat} ></img></a>
    <br></br>
    <br></br>
    <Text>
      Zap-hardhat is the best testing framework out there that our team has had the pleasure of using. Now that we have created this task, it's time to witness 
      the ease of use that hardhat is capable of offering right out of the box. Following the next few steps will allow us to effortlessly simulate a blockchain 
      within our local environent, deploy our oracle, and receive a response to a query made with the parameters that were provided in the dispatchTestTask. 
      Receiving the expected oracle response will mark the end of this tutorial.
    </Text>
    <br></br>
    <Text>Within the zap-hardhat directory, run the following commands:</Text>
    <Code>$ npm i</Code>
    <Code>$ npm run build</Code>
    <Code>$ npm run compile</Code>
    <Code>$ ./start.sh</Code>
    <br></br>
    <Text>
      Once the script has concluded, open another terminal window, navigate to the zap-oracle-template directory, and deploy your oracle to the blockchain.
    </Text>
    <Code>$ npm i</Code>
    <Code>$ ./helper.sh</Code>
    <Code>$ npm start</Code>
    <br></br>
    <Text>
      With your oracle now locally deployed, open one last terminal window, navigate back to the zap-hardhat directory one more time, and run the 
      dispatchTestTask that we created earlier.
    </Text>
    <Code>$ npx hardhat dispatchTestTask --network localhost</Code>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </Container>
)