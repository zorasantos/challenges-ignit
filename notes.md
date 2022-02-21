# Anti-Patters/Code Smells

## Speculative Generality
 - Especular/supor coisas que precisa antes mesmo de precisar
## God Class
  - Uma class que faz muitas coisas, que tem mais de uma responsabilidade
## Divergent Change
  - Se você precisa alterar uma class por mais de um motivo, isso é um anti-pattern

# Design Patterns/Principles/Conventions

## You Aint't Gonna Need (YAGNI)
### obs: (Resolve Speculative Generality)
  - Não faça coisas que você não precisa.

## Single Responsibility Principle (SRP)
### obs: (Resolve God Class and Divergent Change)
  - Cada class precisa ter apenas uma responsabilidade