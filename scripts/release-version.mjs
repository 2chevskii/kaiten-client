export function validateRelease(tag, manifest, lockfile) {
  if (!/^v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)$/.test(tag)) {
    throw new Error("Release tag must use the stable vX.Y.Z format.");
  }

  const version = tag.slice(1);
  if (manifest.name !== "@2chevskii/kaiten-client") {
    throw new Error("Unexpected package name.");
  }
  if (manifest.version !== version) {
    throw new Error(`Package version ${manifest.version} must match ${tag}.`);
  }
  if (
    lockfile &&
    (lockfile.name !== manifest.name ||
      lockfile.version !== version ||
      lockfile.packages?.[""]?.name !== manifest.name ||
      lockfile.packages?.[""]?.version !== version)
  ) {
    throw new Error(
      "package-lock.json must match the package name and version.",
    );
  }

  return {
    version,
    package: `2chevskii-kaiten-client-${version}.tgz`,
  };
}
