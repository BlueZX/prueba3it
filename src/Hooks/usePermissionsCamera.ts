

import { useEffect, useState } from 'react'
import { PermissionsAndroid, PermissionStatus } from 'react-native'

const usePermissionsCamera = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>()

  const requestCameraPermission = () => {
    try {
      setIsLoading(true)
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      ).then(res => {
        setPermissionStatus(res)
        setIsLoading(false)
      })
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(()=>{requestCameraPermission()},[])

  return { permissionStatus, requestCameraPermission, isLoading }
}


export default usePermissionsCamera;