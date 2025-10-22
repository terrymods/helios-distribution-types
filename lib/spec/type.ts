export enum Type {

    Library = 'Library',
    ForgeHosted = 'ForgeHosted',
    NeoForgeHosted = 'NeoForgeHosted',
    Forge = 'Forge',
    Fabric = 'Fabric',
    LiteLoader = 'LiteLoader',
    ForgeMod = 'ForgeMod',
    NeoForgeMod = 'NeoForgeMod',
    FabricMod = 'FabricMod',
    LiteMod = 'LiteMod',
    File = 'File',
    VersionManifest = 'VersionManifest'

}

export interface TypeMetadata {

    id: string
    defaultExtension?: string

}

export const TypeMetadata: {[property: string]: TypeMetadata} = {

    Library: {
        id: Type.Library,
        defaultExtension: 'jar'
    },
    /**
     * @deprecated Will be replaced by Types.Forge.
     */
    ForgeHosted: {
        id: Type.ForgeHosted,
        defaultExtension: 'jar'
    },
    NeoForgeHosted: {
        id: Type.NeoForgeHosted,
        defaultExtension: 'jar'
    },
    Forge: {
        id: Type.Forge,
        defaultExtension: 'jar'
    },
    Fabric: {
        id: Type.Fabric,
        defaultExtension: 'jar'
    },
    LiteLoader: {
        id: Type.LiteLoader,
        defaultExtension: 'jar'
    },
    ForgeMod: {
        id: Type.ForgeMod,
        defaultExtension: 'jar'
    },
    NeoForgeMod: {
        id: Type.NeoForgeMod,
        defaultExtension: 'jar'
    },
    FabricMod: {
        id: Type.FabricMod,
        defaultExtension: 'jar'
    },
    LiteMod: {
        id: Type.LiteMod,
        defaultExtension: 'litemod'
    },
    File: {
        id: Type.File
    },
    VersionManifest: {
        id: Type.VersionManifest,
        defaultExtension: 'json'
    }

}
