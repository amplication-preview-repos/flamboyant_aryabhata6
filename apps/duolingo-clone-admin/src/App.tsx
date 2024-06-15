import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LessonList } from "./lesson/LessonList";
import { LessonCreate } from "./lesson/LessonCreate";
import { LessonEdit } from "./lesson/LessonEdit";
import { LessonShow } from "./lesson/LessonShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { AccountBalanceList } from "./accountBalance/AccountBalanceList";
import { AccountBalanceCreate } from "./accountBalance/AccountBalanceCreate";
import { AccountBalanceEdit } from "./accountBalance/AccountBalanceEdit";
import { AccountBalanceShow } from "./accountBalance/AccountBalanceShow";
import { StateOfPurchasesList } from "./stateOfPurchases/StateOfPurchasesList";
import { StateOfPurchasesCreate } from "./stateOfPurchases/StateOfPurchasesCreate";
import { StateOfPurchasesEdit } from "./stateOfPurchases/StateOfPurchasesEdit";
import { StateOfPurchasesShow } from "./stateOfPurchases/StateOfPurchasesShow";
import { QuestionList } from "./question/QuestionList";
import { QuestionCreate } from "./question/QuestionCreate";
import { QuestionEdit } from "./question/QuestionEdit";
import { QuestionShow } from "./question/QuestionShow";
import { RoadmapList } from "./roadmap/RoadmapList";
import { RoadmapCreate } from "./roadmap/RoadmapCreate";
import { RoadmapEdit } from "./roadmap/RoadmapEdit";
import { RoadmapShow } from "./roadmap/RoadmapShow";
import { UserLastStateList } from "./userLastState/UserLastStateList";
import { UserLastStateCreate } from "./userLastState/UserLastStateCreate";
import { UserLastStateEdit } from "./userLastState/UserLastStateEdit";
import { UserLastStateShow } from "./userLastState/UserLastStateShow";
import { UserHeartsList } from "./userHearts/UserHeartsList";
import { UserHeartsCreate } from "./userHearts/UserHeartsCreate";
import { UserHeartsEdit } from "./userHearts/UserHeartsEdit";
import { UserHeartsShow } from "./userHearts/UserHeartsShow";
import { AnswerList } from "./answer/AnswerList";
import { AnswerCreate } from "./answer/AnswerCreate";
import { AnswerEdit } from "./answer/AnswerEdit";
import { AnswerShow } from "./answer/AnswerShow";
import { UserCoinsList } from "./userCoins/UserCoinsList";
import { UserCoinsCreate } from "./userCoins/UserCoinsCreate";
import { UserCoinsEdit } from "./userCoins/UserCoinsEdit";
import { UserCoinsShow } from "./userCoins/UserCoinsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DuolingoClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Lesson"
          list={LessonList}
          edit={LessonEdit}
          create={LessonCreate}
          show={LessonShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="AccountBalance"
          list={AccountBalanceList}
          edit={AccountBalanceEdit}
          create={AccountBalanceCreate}
          show={AccountBalanceShow}
        />
        <Resource
          name="StateOfPurchases"
          list={StateOfPurchasesList}
          edit={StateOfPurchasesEdit}
          create={StateOfPurchasesCreate}
          show={StateOfPurchasesShow}
        />
        <Resource
          name="Question"
          list={QuestionList}
          edit={QuestionEdit}
          create={QuestionCreate}
          show={QuestionShow}
        />
        <Resource
          name="Roadmap"
          list={RoadmapList}
          edit={RoadmapEdit}
          create={RoadmapCreate}
          show={RoadmapShow}
        />
        <Resource
          name="UserLastState"
          list={UserLastStateList}
          edit={UserLastStateEdit}
          create={UserLastStateCreate}
          show={UserLastStateShow}
        />
        <Resource
          name="UserHearts"
          list={UserHeartsList}
          edit={UserHeartsEdit}
          create={UserHeartsCreate}
          show={UserHeartsShow}
        />
        <Resource
          name="Answer"
          list={AnswerList}
          edit={AnswerEdit}
          create={AnswerCreate}
          show={AnswerShow}
        />
        <Resource
          name="UserCoins"
          list={UserCoinsList}
          edit={UserCoinsEdit}
          create={UserCoinsCreate}
          show={UserCoinsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
