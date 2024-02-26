package com.app.service;

public interface UserService {
    boolean registerUser(UserDetails userDetails);
    void getAllUsers();
    boolean updateUserProfile(String userId, UserDetails updatedDetails);
    boolean deleteUserProfile(String userId);
    String authenticateUser(String username, String password);
}
