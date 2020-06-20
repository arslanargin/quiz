const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    PLAY:  Symbol("play"),
    QUESTION1: Symbol("question1"),
    QUESTION2: Symbol("question2"),
    QUESTION3: Symbol("question3"),
    QUESTION4: Symbol("question4"),
    QUESTION5: Symbol("question5"),
    QUESTION6: Symbol("question6"),
    QUESTION7: Symbol("question7"),
    QUESTION8: Symbol("question8"),
    QUESTION9: Symbol("question9"),
    QUESTION10: Symbol("question10"),
    TOAST: Symbol("toast")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "Hi, welcome to my quiz. Would you like to PLAY a game about the provinces of Canada?";
                this.stateCur = GameState.PLAY;
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("play")){
                    sReply = "Which province is the most populated province of Canada? ONTARIO or QUEBEC or BRITISH COLUMBIA or ALBERTA";
                    //Let`s play the game
                    this.stateCur = GameState.QUESTION1;
            }else{
                    sReply ="THE END";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
            case GameState.QUESTION1:
                if(sInput.toLowerCase().match("ontario")){
                    sReply = "Correct Answer. NEXT Question or QUIT?"
                    this.stateCur = GameState.QUESTION2;
                }else{
                    sReply = "WRONG ANSWER. NEXT Question or QUIT?";
                    this.stateCur = GameState.QUESTION2;
                }
                break;
            case GameState.QUESTION2:
                if(sInput.toLowerCase().match("next")){
                    sReply = "In which province is oil extracted? ALBERTA or MANITOBA or SASKATCHWAN or PEI";
                    this.stateCur = GameState.QUESTION3;

                }else{
                    sReply = "THE END";
                    this.stateCur = GameState.WELCOMING;
    
                }
                break;
            case GameState.QUESTION3:
                if(sInput.toLowerCase().match("alberta")){
                    sReply = "Correct Answer. NEXT question or QUIT?";
                    this.stateCur = GameState.QUESTION4;
                }else{
                    sReply = "WRONG ANSWER.NEXT question or QUIT?";
                    this.stateCur = GameState.QUESTION4;
                }
                break;
                case GameState.QUESTION4:
                if(sInput.toLowerCase().match("next")){
                    sReply = "which province is on pacific coast? BRITISH COLUMBIA or NOva SCOTIA or LABRADOR or QUEBEC";
                    this.stateCur = GameState.QUESTION5;
                }else{
                    sReply = "THE END";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
                case GameState.QUESTION5:
                if(sInput.toLowerCase().match("british columbia")){
                    sReply = "Correct Answer. NEXT question or QUIT?";
                    this.stateCur = GameState.QUESTION6;
                }else{
                    sReply = "WRONG ANSWER.NEXT question or QUIT?";
                    this.stateCur = GameState.QUESTION6;
                }
                break;
                case GameState.QUESTION6:
                    if(sInput.toLowerCase().match("next")){
                        sReply = "Which province is the least populated province of Canada? NUNAVUT or QUEBEC or BRITISH COLUMBIA or ALBERTA";
                        this.stateCur = GameState.QUESTION7;
                    }else{
                        sReply = "THE END";
                        this.stateCur = GameState.WELCOMING;
                    }
                break;
                case GameState.QUESTION7:
                if(sInput.toLowerCase().match("nunavut")){
                    sReply = "Correct Answer. NEXT question or QUIT?";
                    this.stateCur = GameState.QUESTION8;
                }else{
                    sReply = "WRONG ANSWER.NEXT question or QUIT?";
                    this.stateCur = GameState.QUESTION8;
                }
                break;
                case GameState.QUESTION8:
                if(sInput.toLowerCase().match("next")){
                    sReply = "Which province is bilingual? PEI, ALBERTA, NEW BRUNSWICK";
                    this.stateCur = GameState.QUESTION9;
                }else{
                    sReply = "The End";
                    this.stateCur = GameState.WELCOMING;
                }
                break;
                case GameState.QUESTION9:
                if(sInput.toLowerCase().match("new brunswick")){
                    sReply = "Correct Answer. Thanks For playing the game. Do you want to PLAY again?";
                    this.stateCur = GameState.PLAY;
                }else{
                    sReply = "THE END. Thanks For playing the game.";
                    this.stateCur = GameState.WELCOMING;
                }
        }
        return([sReply]);
    }
}