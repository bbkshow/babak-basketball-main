import { AppLayout } from "../common/components/layouts/AppLayout";
import { Route, Switch } from "react-router-dom";
import { TeamsPage } from "../modules/teams/pages/teams/TeamsPage";
import { PlayersPage } from "../modules/players/pages/players/PlayersPage";
import { pathList } from "./pathList";
import { AddTeamPage } from "../modules/teams/pages/add-team/AddTeamPage";
import { TeamViewPage } from "../modules/teams/pages/team/TeamViewPage";
import { AddPlayerPage } from "../modules/players/pages/add-player/AddPlayerPage";
import { EditTeamPage } from "../modules/teams/pages/edit-team/EditTeamPage";
import { PlayerViewPage } from "../modules/players/pages/player/PlayerViewPage";
import { EditPlayerPage } from "../modules/players/pages/edit-player/EditPlayerPage";

export const ContentRoutes = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path={pathList.content.teams} exact>
          <TeamsPage />
        </Route>
        <Route path={pathList.content.addTeam} exact>
          <AddTeamPage />
        </Route>
        <Route path={pathList.content.teams + ":id"} exact>
          <TeamViewPage />
        </Route>
        <Route path={pathList.content.editTeam + ":id"} exact>
          <EditTeamPage />
        </Route>
        <Route path={pathList.content.players} exact>
          <PlayersPage />
        </Route>
        <Route path={pathList.content.addPlayer} exact>
          <AddPlayerPage />
        </Route>
        <Route path={pathList.content.players + ":id"} exact>
          <PlayerViewPage />
        </Route>
        <Route path={pathList.content.editPlayers + ":id"} exact>
          <EditPlayerPage />
        </Route>
      </Switch>
    </AppLayout>
  );
};
