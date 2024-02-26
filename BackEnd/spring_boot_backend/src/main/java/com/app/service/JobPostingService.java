package com.app.service;

public interface JobPostingService {
    void addJobPosting(String location, String jobDescription);
    String searchJobPostings(String location);
    List<Post> getPostsSortedByDate(List<Post> posts);
