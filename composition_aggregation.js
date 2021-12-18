//Car must have Engine
public class Car {
   //engine is a mandatory part of the car
   private final Engine engine;

   public Car () {
      engine = new Engine();
   }
}

//Engine Object
class Engine {}

/*
Aggregation
*/

//Team
public class Team {      
   //players can be 0 or more
   private List players;

   public Car () {
      players = new ArrayList();
   }
}
//Player Object
class Player {}
