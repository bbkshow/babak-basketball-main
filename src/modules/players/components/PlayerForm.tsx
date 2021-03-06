import { InputFile } from "../../../common/components/ui/InputFile";
import styled from "styled-components";
import { UseFormMethods } from "react-hook-form";
import { Button } from "../../../common/components/ui/Button";
import { Input } from "../../../common/components/ui/Input";
import {
  Select,
  SelectOptions,
  SelectProps,
} from "../../../common/components/ui/Select/Select";
import { OptionTypeBase } from "react-select";
import { Notification } from "../../../common/components/Notification";
import noLogo from "../../../assets/images/no-logo.png";

export interface PlayerFormFields {
  name: string;
  height: number;
  weight: number;
  number: number;
  file: FileList;
  birthday: string;
  position: OptionTypeBase;
  team: OptionTypeBase;
}

interface Props
  extends Partial<Pick<UseFormMethods, "register">>,
    Pick<SelectProps, "control" | "handleInputChange" | "loading"> {
  onSubmit: () => void;
  playerImage?: string;
  optionsPositions?: Array<{ value: string; label: string }>;
  teamsOptions?: SelectOptions;
  goBackHandler: () => void;
  error?: string;
}

export const PlayerForm = ({
  onSubmit,
  register,
  playerImage,
  control,
  optionsPositions,
  teamsOptions,
  handleInputChange,
  loading,
  goBackHandler,
  error,
}: Props) => {
  const noImage = "http://dev.trainee.dex-it.ru";
  return (
    <Form onSubmit={onSubmit}>
      <Notification error={error} />
      <AddImgWrapper>
        <InputFile
          register={register}
          image={
            playerImage !== noImage ? (
              <PlayerImg src={playerImage} />
            ) : (
              <PlayerImg src={noLogo} />
            )
          }
        />
      </AddImgWrapper>
      <WrapperItem>
        <Input register={register} name="name" label="Name" type="text" />
        <Select
          control={control}
          nameSelect="position"
          label={"Position"}
          options={optionsPositions}
        />
        <Select
          control={control}
          nameSelect="team"
          label={"Team"}
          options={teamsOptions}
          handleInputChange={handleInputChange}
          loading={loading}
        />
        <WrapperItemGrid>
          <Input
            register={register}
            name="height"
            label="Height (cm)"
            type="number"
          />
          <Input
            register={register}
            name="weight"
            label="Weight (kg)"
            type="number"
          />
          <Input
            register={register}
            name="birthday"
            label="Birthday"
            type="date"
          />
          <Input
            register={register}
            name="number"
            label="Number"
            type="number"
          />
          <Button type="reset" onClick={goBackHandler} cancelBtn>
            Cancel
          </Button>
          <Button>Save</Button>
        </WrapperItemGrid>
      </WrapperItem>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px;
  height: 100%;
  @media ${({ theme }) => theme.deviceSize.laptop} {
    flex-direction: row;
    align-items: flex-start;
    padding: 48px 0;
  }
`;

const AddImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media ${({ theme }) => theme.deviceSize.laptop} {
    justify-content: flex-start;
    max-width: 545px;
    margin: 0 75px;
  }
`;

const PlayerImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  z-index: 50;
  opacity: 0.5;
  object-fit: scale-down;
`;

const WrapperItem = styled.div`
  max-width: 366px;
  width: 100%;
  & > div {
    margin-bottom: 24px;
  }

  @media ${({ theme }) => theme.deviceSize.laptop} {
    margin-right: 24px;
  }
`;

const WrapperItemGrid = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  width: 100%;
  grid-gap: 24px;
`;
