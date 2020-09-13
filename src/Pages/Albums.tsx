import React, { useEffect, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../Stores/StoreConfig";
import Header from "../Components/Header";
import CustomSpinner  from "../Components/CustomSpinner";
import AlbumCard from "../Components/AlbumCard";
import AlbumModel from "../Models/AlbumModel";

const Albums = () => {
  const { albumsStore } = useStores();
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [resetList, setResetList] = useState(false);

  useEffect(() => {
    albumsStore.loadAlbums();
  }, [albumsStore]);

  useEffect(() => {
    setAlbums(albumsStore.albumList);
    setResetList(false);
  }, [albumsStore.albumList, resetList]);

  const handleBrowserSearch = useCallback(
    (searchValue: string) => {
      let filteredAlbumList = new Array<AlbumModel>();

      // filter list based on string
      if (albums !== undefined) {
        filteredAlbumList = albums?.filter(
          (item) =>
            item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        );
      }
      // set filtered list
      setAlbums(filteredAlbumList);

      // if search field is empty, map whole list again
      if (searchValue === "") {
        setResetList(true);
      }
    },[albums]);

  return (
    <>
      <Header
        title="Albums"
        subtitle="Here is a list of the best albums ever"
      />
      <div className="list-container">
        <input
          type="search"
          className="form-control form-control-lg mb-4 mx-auto"
          placeholder="Type to search"
          onChange={(e) => handleBrowserSearch(e.target.value)}
        />
        {albumsStore.isLoading ? (
          <CustomSpinner/>
        ) : (
          <div className="row">
            {albums.length > 0 &&
              albums.map((l) => (
                <div key={l.id} className="col-md-4 mb-4">
                  <AlbumCard title={l.title} />
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default observer(Albums);
