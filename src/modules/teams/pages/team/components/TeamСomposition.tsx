import styled from "styled-components";
import { PlayerParams } from "../../../../../api/players/PlayersDto";
import { getAge } from "../../../../../common/helpers/getAge";
import { Link } from "react-router-dom";
import { pathList } from "../../../../../routers/pathList";
import noLogo from "../../../../../assets/images/no-logo.png";

interface Props {
  players: Array<PlayerParams> | undefined;
}

export const TeamComposition = ({ players }: Props) => {
  return (
    <TeamRoster>
      <CardHeader>
        <Title>Roster</Title>
      </CardHeader>
      <TableRoster>
        <TableHead>
          <CeilLeft>#</CeilLeft>
          <CeilLeft>Player</CeilLeft>
          <CeilRight>Height</CeilRight>
          <CeilRight>Weight</CeilRight>
          <CeilRight>Age</CeilRight>
        </TableHead>
        <TableBody>
          {players &&
            players.map((player) => {
              const age = getAge(player);
              return (
                <TableRow key={player.id}>
                  <CeilLeft>{player.number}</CeilLeft>
                  <CeilLeft>
                    <CeilItem>
                      <ImgLink to={pathList.content.players + player.id}>
                        <Img
                          src={
                            player.avatarUrl
                              ? `http://dev.trainee.dex-it.ru${player.avatarUrl}`
                              : noLogo
                          }
                          alt={"Logo"}
                        />
                      </ImgLink>
                      <PlayerInfo>
                        <NameLink to={pathList.content.players + player.id}>
                          {player.name}
                        </NameLink>
                        <Position>{player.position}</Position>
                      </PlayerInfo>
                    </CeilItem>
                  </CeilLeft>
                  <CeilRight>{player.height} cm</CeilRight>
                  <CeilRight>{player.weight} kg</CeilRight>
                  <CeilRight>{age}</CeilRight>
                </TableRow>
              );
            })}
        </TableBody>
      </TableRoster>
    </TeamRoster>
  );
};

const TeamRoster = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};
  border: 0.5px solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.deviceSize.tablet} {
    border-radius: 10px;
  }
  @media ${({ theme }) => theme.deviceSize.laptop} {
    border-radius: 10px;
  }
`;
const CardHeader = styled.div`
  padding: 20px 32px;
`;
const Title = styled.h2`
  font-size: 15px;

  @media ${({ theme }) => theme.deviceSize.laptop} {
    font-size: 18px;
  }
`;

const TableRoster = styled.div`
  border-top: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
`;

const TableHead = styled.div`
  padding: 10px 0 10px 16px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;

  @media ${({ theme }) => theme.deviceSize.laptop} {
    padding: 10px 0 10px 32px;
    grid-template-columns: 0.1fr 1fr 0.3fr 0.3fr 0.3fr;
  }
`;

const CeilLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CeilItem = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  width: 52px;
  height: 38px;
  margin-right: 10px;
  border-radius: 50px;
`;

const PlayerInfo = styled.div`
  line-height: 24px;
`;

const NameLink = styled(Link)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
`;

const Position = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const ImgLink = styled(Link)`
  text-decoration: none;
`;

const CeilRight = styled.div`
  display: none;
  @media ${({ theme }) => theme.deviceSize.laptop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TableBody = styled.div``;

const TableRow = styled.div`
  border-top: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 10px 0 10px 16px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;

  @media ${({ theme }) => theme.deviceSize.laptop} {
    padding: 10px 0 10px 32px;
    grid-template-columns: 0.1fr 1fr 0.3fr 0.3fr 0.3fr;
  }
`;
