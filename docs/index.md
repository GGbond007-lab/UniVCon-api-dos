# VContainerRH

The extra fast DI (Dependency Injection) library for Unity Game Engine.  
**"V"** means making Unity's initial **"U"** more thinner and solid..!

## Features

- **Fast Resolve**: Basically 5-10x faster than Zenject
- **Minimum GC Allocation**: In Resolve, we have zero allocation without spawned instances
- **Small Code Size**: Few internal types and few .callvirt
- **Assisting Correct DI Way**: Provides simple and transparent API, and carefully select features
- **Immutable Container**: Thread safety and robustness

## Installation

Requires Unity 2018.4+

### Install via UPM (using Git URL)

Navigate to your project's `Packages` folder and open the `manifest.json` file.
Add this line below the `"dependencies": {` line:

```
"jp.hadashikick.vcontainer": "https://github.com/hadashiA/VContainer.git?path=VContainer/Assets/VContainer#1.17.0",
```

### Install via OpenUPM

```bash
openupm add jp.hadashikick.vcontainer
```

## Quick Start

First, create a scope:

```csharp
public class GameLifetimeScope : LifetimeScope
{
    protected override void Configure(IContainerBuilder builder)
    {
        builder.RegisterEntryPoint<ActorPresenter>();
        builder.Register<CharacterService>(Lifetime.Scoped);
        builder.Register<IRouteSearch, AStarRouteSearch>(Lifetime.Singleton);
        builder.RegisterComponentInHierarchy<ActorsView>();
    }
}
```

## Architecture

| Component         | Description                                |
| ----------------- | ------------------------------------------ |
| LifetimeScope     | Root container for service registration    |
| IContainerBuilder | Builder for registering services           |
| IObjectResolver   | Resolver for accessing registered services |

## License

MIT License