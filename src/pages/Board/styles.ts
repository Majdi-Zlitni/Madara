import styled, { css } from 'styled-components/macro'
import { theme } from 'theme/theme'
import { ReactComponent as HandWriting } from 'assets/hand-writing.svg'
import { ReactComponent as LogoutSVG } from 'assets/logout.svg'
import { ReactComponent as ToggleSVG } from 'assets/add-task.svg'
import { ReactComponent as CardLogoSVG } from 'assets/card-logo.svg'
import { ReactComponent as CardMenuSVG } from 'assets/card-menu.svg'
import { ReactComponent as EditCloseSVG } from 'assets/close.svg'
import { focusStyles } from 'styles'
import { media } from 'theme/media'

/* Logout */
export const LogoutButton = styled.button`
  height: 4.6rem;
  width: 4.6rem;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 4.5%;
  left: 96%;
  cursor: pointer;
  transition: 0.2s;
  ${media.tablet} {
    &:hover {
      svg {
        transform: translateY(-0.2rem);
      }
    }
  }
  ${focusStyles};
`

export const Logout = styled(LogoutSVG)`
  height: 100%;
  width: 100%;
  ${media.tablet} {
    transition: 0.2s;
  }
`

/* Layout */
export const BoardMain = styled.main`
  grid-area: main;
  display: grid;
  width: 100%;
  height: calc(100vh - 8rem);
  grid-template-areas:
    'title'
    'subtitle'
    'board';
  justify-items: center;
  align-items: center;
  grid-template-rows: 10% 7% 83%;
  ${media.tablet} {
    overflow-y: hidden;
  }
  ${media.desktop} {
    overflow-y: auto;
  }
`

export const Title = styled.h1`
  grid-area: title;
  font-family: ${theme.LibreBaskerville};
  color: ${theme.Blue};
  font-size: 6.4rem;
`

export const SubtitleWrapper = styled.div`
  grid-area: subtitle;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 53.7rem;
`

export const Subtitle = styled.h2`
  font-size: 4.8rem;
  font-family: ${theme.SourceSansPro};
  color: ${theme.Blue};
  font-weight: 600;
`

export const SubtitleHandWriting = styled(HandWriting)`
  height: 6.5rem;
  width: 6.5rem;
  position: relative;
  bottom: 0.5rem;
  fill: ${theme.Blue};
`

/* Board */
export const BoardWrapper = styled.section`
  height: 95%;
  width: 100%;
  grid-area: board;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  ${media.tablet} {
    column-gap: 2rem;
    padding: 0 2rem;
    overflow-x: visible;
  }
  ${media.desktop} {
    overflow-x: auto;
    column-gap: 0;
    padding: 0;
  }
`

export const BoardColumn = styled.section`
  height: 90%;
  width: 30%;
  max-width: 40rem;
  min-width: 35rem;
  background-color: ${theme.Blue};
  box-shadow: 0 0 1rem ${theme.Blue};
  display: grid;
  grid-template-areas:
    'totalTasks status toggleFormButton'
    'inner inner inner';
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 7%;
  align-content: flex-start;
  align-items: center;
  justify-items: flex-end;
  border-radius: 0.5rem;
  overflow-y: auto;
  ${focusStyles};
`

export const TotalTasks = styled.span`
  grid-area: totalTasks;
  padding: 0 0.6rem;
  background-color: ${theme.LightBlue};
  border-radius: 2em;
  font-size: 2rem;
  font-family: ${theme.SourceSansPro};
  font-weight: 600;
  color: ${theme.Blue};
`

export const Status = styled.h3`
  grid-area: status;
  justify-self: flex-start;
  font-size: 2rem;
  border-radius: 0.5rem;
  padding-left: 1rem;
  font-weight: 600;
  font-family: ${theme.SourceSansPro};
  color: ${theme.LightBlue};
`

export const ToggleFormButton = styled.button`
  grid-area: toggleFormButton;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  ${focusStyles};
`

export const Toggle = styled(ToggleSVG)`
  width: 100%;
  height: 100%;
`

export const Inner = styled.section<{ isFormOpen: boolean }>`
  grid-area: inner;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
  padding-bottom: 0.5rem;
  max-height: 100%;
  ${(props) =>
    props.isFormOpen &&
    css`
      justify-content: stretch;
    `}
`

export const Card = styled.article`
  position: relative;
  background-color: ${theme.LightBlue};
  border-radius: 0.5rem;
  min-height: 15rem;
  width: 90%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  grid-template-rows: minmax(10%, auto) minmax(70%, auto) minmax(10%, auto);
  grid-template-areas:
    'logo menuButton'
    'text text'
    'date date';
  row-gap: 0.5rem;
  align-items: center;
  ${focusStyles};
`

export const CardLogo = styled(CardLogoSVG)`
  grid-area: logo;
  justify-self: start;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  height: 2.1rem;
  width: 2.7rem;
`

export const CardMenuButton = styled.button`
  grid-area: menuButton;
  justify-self: end;
  margin-right: 1.5rem;
  margin-top: 1.5rem;
  height: 1.6rem;
  width: 1.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${focusStyles};
`

export const CardMenuLogo = styled(CardMenuSVG)`
  height: 100%;
  width: 100%;
`

export const CardText = styled.p`
  grid-area: text;
  font-weight: 600;
  max-width: 90%;
  justify-self: end;
  font-family: ${theme.SourceSansPro};
  font-size: 1.8rem;
  padding-right: 2rem;
  color: ${theme.Blue};
`

export const CardDate = styled.span`
  grid-area: date;
  justify-self: start;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  font-family: ${theme.SourceSansPro};
  font-size: 1.2rem;
  color: ${theme.Blue};
`

export const AddTaskForm = styled.form`
  background: transparent;
  width: 90%;
  height: 15rem;
  display: grid;
  grid-template-areas:
    'textarea textarea'
    'addButton cancelButton';
  grid-template-rows: 69% 25%;
  grid-template-columns: 50% 50%;
  align-items: center;
  row-gap: 1rem;
  margin-bottom: 1.5rem;
`

export const AddTaskTextarea = styled.textarea`
  grid-area: textarea;
  height: 100%;
  width: 100%;
  background: ${theme.White};
  color: ${theme.Blue};
  border-radius: 0.5rem;
  font-family: ${theme.SourceSansPro};
  font-size: 1.8rem;
  padding: 0.7rem 0 0 1rem;
  font-weight: 600;
  transition: 0.2s;
  &::placeholder {
    color: ${theme.Blue};
    opacity: 0.7;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0.3rem 0.4rem ${theme.DarkBlue};
  }
`

const formButtonStyles = css`
  font-family: ${theme.SourceSansPro};
  font-weight: 600;
  font-size: 1.8rem;
  height: 3.5rem;
  width: 13rem;
  border-radius: 0.2rem;
  background-color: transparent;
  transition: 0.2s;
  ${focusStyles};
  ${media.tablet} {
    &:hover {
      color: ${theme.Blue};
      box-shadow: 0 0.2rem 0.3rem ${theme.DarkBlue};
      transform: translateY(-0.1rem);
    }
    &:active {
      box-shadow: 0 0.2rem 0.1rem ${theme.DarkBlue};
      transform: translateY(0.1rem);
    }
  }
`

export const FormAddButton = styled.button`
  ${formButtonStyles};
  grid-area: addButton;
  border: 0.2rem solid ${theme.Green};
  color: ${theme.Green};
  &:disabled {
    opacity: 0.3;
  }
  ${media.tablet} {
    &:hover:not(:disabled) {
      cursor: pointer;
      background-color: ${theme.Green};
    }
  }
`

export const FormCancelButton = styled.button`
  ${formButtonStyles};
  grid-area: cancelButton;
  border: 0.2rem solid ${theme.Pink};
  color: ${theme.Pink};
  justify-self: end;
  cursor: pointer;
  ${media.tablet} {
    &:hover {
      background-color: ${theme.Pink};
    }
  }
`

export const CardMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 15rem;
  width: 40%;
  background-color: ${theme.Blue};
  box-shadow: 0 0.2rem 1rem ${theme.DarkBlue};
  border-radius: 0.5rem;
  top: 65%;
  left: 76.2%;
  transform: translate(-50%, -50%);
  ${media.desktop} {
    top: 70%;
    height: 17rem;
  }
`

export const CardMenuItem = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  font-family: ${theme.SourceSansPro};
  font-size: 2rem;
  font-weight: 600;
  height: 4rem;
  color: ${theme.LightBlue};
  transition: 0.1s;
  cursor: pointer;
  ${media.tablet} {
    &:hover {
      background-color: ${theme.LightBlue};
      color: ${theme.Blue};
    }
  }
  ${focusStyles};
`

export const EditModal = styled.div`
  position: absolute;
  width: 45rem;
  height: 28rem;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${focusStyles};
`

export const EditModalHeader = styled.div`
  height: 20%;
  width: 100%;
  background-color: ${theme.MiddleBlue};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const EditModalForm = styled.form`
  height: 80%;
  width: 100%;
  background-color: ${theme.Blue};
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  display: grid;
  grid-template-areas:
    'label label label label label label'
    'textarea textarea textarea textarea textarea textarea'
    'confirm confirm confirm cancel cancel cancel';
  grid-template-rows: 20% 50% 30%;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
`

export const EditTitle = styled.h1`
  font-family: ${theme.SourceSansPro};
  color: ${theme.LightBlue};
  font-weight: 600;
  font-size: 1.8rem;
  margin-left: 2rem;
`

export const EditCloseButton = styled.button`
  border: none;
  background-color: transparent;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 2rem;
  cursor: pointer;
  ${focusStyles};
`

export const EditClose = styled(EditCloseSVG)`
  height: 100%;
  width: 100%;
`

export const EditLabel = styled.label`
  grid-area: label;
  font-family: ${theme.SourceSansPro};
  font-weight: 600;
  font-size: 1.8rem;
  color: ${theme.LightBlue};
  align-self: center;
  justify-self: flex-start;
  padding-left: 4.5rem;
`

export const EditTextarea = styled.textarea`
  grid-area: textarea;
  background-color: ${theme.LightBlue};
  width: 80%;
  height: 100%;
  font-weight: 600;
  font-size: 1.8rem;
  font-family: ${theme.SourceSansPro};
  color: ${theme.Blue};
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  &::placeholder {
    opacity: 0.7;
    color: ${theme.Blue};
  }
  &:focus {
    outline: none;
    box-shadow: 0 0.3rem 0.4rem ${theme.DarkBlue};
  }
`

const editModalButtonStyles = css`
  font-family: ${theme.SourceSansPro};
  font-weight: 600;
  height: 3.5rem;
  width: 13.5rem;
  border-radius: 0.2rem;
  background-color: transparent;
  transition: 0.2s;
  font-size: 1.8rem;
  ${focusStyles};
  ${media.tablet} {
    &:hover:not(:disabled) {
      color: ${theme.Blue};
      box-shadow: 0 0.2rem 0.3rem ${theme.DarkBlue};
      transform: translateY(-0.1rem);
    }
    &:active:not(:disabled) {
      box-shadow: 0 0.2rem 0.1rem ${theme.DarkBlue};
      transform: translateY(0.1rem);
    }
  }
`

export const EditConfirmButton = styled.button`
  ${editModalButtonStyles};
  grid-area: confirm;
  border: 0.2rem solid ${theme.Green};
  color: ${theme.Green};
  &:disabled {
    opacity: 0.3;
  }
  ${media.tablet} {
    &:hover:not(:disabled) {
      cursor: pointer;
      background-color: ${theme.Green};
    }
  }
`

export const EditCancelButton = styled.button`
  ${editModalButtonStyles};
  grid-area: cancel;
  border: 0.2rem solid ${theme.Pink};
  color: ${theme.Pink};
  cursor: pointer;
  ${media.tablet} {
    &:hover {
      background-color: ${theme.Pink};
    }
  }
`
